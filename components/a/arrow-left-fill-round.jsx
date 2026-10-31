import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgme0g3dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgme0g3dg"/>`,
		"fallback": "coolicons:arrow-left-fill-round",
	});
}

export default Component;
