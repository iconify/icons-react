import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxujscb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxujscb9k"/>`,
		"fallback": "streamline-logos:adobe-indesign-logo-solid",
	});
}

export default Component;
