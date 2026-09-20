import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzv9idc7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tzv9idc7v"/>`,
		"fallback": "pajamas:check-circle-filled",
	});
}

export default Component;
