import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3i9_lhj.css';
import '../../css/y/ydkyucbmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3i9_lhj"/><path class="ydkyucbmf"/>`,
		"fallback": "energy-icons:api-20",
	});
}

export default Component;
