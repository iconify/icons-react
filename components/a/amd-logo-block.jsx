import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwbk_kbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cwbk_kbsa"/>`,
		"fallback": "streamline-logos:amd-logo-block",
	});
}

export default Component;
