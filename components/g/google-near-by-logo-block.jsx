import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksuxf_bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ksuxf_bbf"/>`,
		"fallback": "streamline-logos:google-near-by-logo-block",
	});
}

export default Component;
