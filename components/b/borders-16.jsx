import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qndn4-bth.css';
import '../../css/j/jodh5db0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qndn4-bth"/><path clip-rule="evenodd" class="jodh5db0p"/>`,
		"fallback": "qlementine-icons:borders-16",
	});
}

export default Component;
