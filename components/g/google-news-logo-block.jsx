import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpj70b3ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rpj70b3ye"/>`,
		"fallback": "streamline-logos:google-news-logo-block",
	});
}

export default Component;
