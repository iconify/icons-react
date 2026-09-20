import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu60kgxto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wu60kgxto"/>`,
		"fallback": "streamline-logos:adobe-premiere-pro-logo-solid",
	});
}

export default Component;
