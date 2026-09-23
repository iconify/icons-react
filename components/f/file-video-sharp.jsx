import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvny9qbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvny9qbsh"/>`,
		"fallback": "keyline-icons:file-video-sharp",
	});
}

export default Component;
