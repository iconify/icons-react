import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztcljccrf.css';
import '../../css/m/mk532_t7l.css';
import '../../css/l/lr4yiccjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztcljccrf"/><path class="mk532_t7l"/><path class="lr4yiccjv"/>`,
		"fallback": "energy-icons:diode-20",
	});
}

export default Component;
