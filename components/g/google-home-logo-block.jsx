import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7gu6zfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cy7gu6zfg"/>`,
		"fallback": "streamline-logos:google-home-logo-block",
	});
}

export default Component;
