import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdkligb_j.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdkligb_j"/>`,
		"fallback": "fa-solid:angle-double-down",
	});
}

export default Component;
