import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcj8rbciv.css';
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
		"content": `<path class="bcj8rbciv"/><circle class="j8-uowi8q"/><g class="n1mjunbsu"><path class="esnwcwmxk"/><path class="j91_6f1oz"/></g>`,
		"fallback": "flat-color-icons:add-column",
	});
}

export default Component;
