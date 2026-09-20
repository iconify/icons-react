import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti74s-boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ti74s-boh"/>`,
		"fallback": "streamline-logos:bandcamp-logo-1-block",
	});
}

export default Component;
