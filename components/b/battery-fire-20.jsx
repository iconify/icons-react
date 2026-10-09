import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9eubhbjc.css';
import '../../css/z/zp0_hubyv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9eubhbjc"/><path class="zp0_hubyv"/>`,
		"fallback": "energy-icons:battery-fire-20",
	});
}

export default Component;
