import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4yi2x4py.css';
import '../../css/u/uax5j8b6w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4yi2x4py"/><path class="uax5j8b6w"/>`,
		"fallback": "energy-icons:hard-hat-20",
	});
}

export default Component;
