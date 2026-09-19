import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9nlq4bmh.css';
import '../../css/e/eg53tfboc.css';
import '../../css/p/pvwubie-t.css';
import '../../css/f/furrw-3gr.css';
import '../../css/j/j8-uowi8q.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/esnwcwmxk.css';
import '../../css/j/j91_6f1oz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9nlq4bmh"/><circle class="eg53tfboc"/><path class="pvwubie-t"/><path class="furrw-3gr"/><circle class="j8-uowi8q"/><g class="n1mjunbsu"><path class="esnwcwmxk"/><path class="j91_6f1oz"/></g>`,
		"fallback": "flat-color-icons:add-image",
	});
}

export default Component;
