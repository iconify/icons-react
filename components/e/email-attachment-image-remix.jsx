import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxelqf_ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxelqf_ve"/>`,
		"fallback": "streamline-sharp:email-attachment-image-remix",
	});
}

export default Component;
