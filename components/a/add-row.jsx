import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udty6gpuq.css';
import '../../css/j/j8-uowi8q.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/j91_6f1oz.css';
import '../../css/e/esnwcwmxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udty6gpuq"/><circle class="j8-uowi8q"/><g class="n1mjunbsu"><path class="j91_6f1oz"/><path class="esnwcwmxk"/></g>`,
		"fallback": "flat-color-icons:add-row",
	});
}

export default Component;
