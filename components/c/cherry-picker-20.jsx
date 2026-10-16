import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvfa_-8wt.css';
import '../../css/q/qlwn4rb9s.css';
import '../../css/y/y1kkhac6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvfa_-8wt"/><path class="qlwn4rb9s"/><path class="y1kkhac6p"/>`,
		"fallback": "energy-icons:cherry-picker-20",
	});
}

export default Component;
