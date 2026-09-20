import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il8gdxbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il8gdxbet"/>`,
		"fallback": "pixelarticons:ai-voice",
	});
}

export default Component;
