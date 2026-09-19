import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-lf_6bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq-lf_6bl"/>`,
		"fallback": "boxicons:glasses-filled",
	});
}

export default Component;
