import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h654y7b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h654y7b-g"/>`,
		"fallback": "streamline-logos:evernote-logo-block",
	});
}

export default Component;
