import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3efznb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3efznb-i"/>`,
		"fallback": "streamline-logos:google-microphone-voice-search-logo-solid",
	});
}

export default Component;
