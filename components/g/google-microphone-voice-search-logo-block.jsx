import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2jwt4bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2jwt4bmx"/>`,
		"fallback": "streamline-logos:google-microphone-voice-search-logo-block",
	});
}

export default Component;
