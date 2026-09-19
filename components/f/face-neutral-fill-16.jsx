import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de4e_zb_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de4e_zb_j"/>`,
		"fallback": "garden:face-neutral-fill-16",
	});
}

export default Component;
