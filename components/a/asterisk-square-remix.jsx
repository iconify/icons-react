import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgrqvsb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgrqvsb8u"/>`,
		"fallback": "streamline-sharp:asterisk-square-remix",
	});
}

export default Component;
