import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whco19wwk.css';

const viewBox = {"width":1024,"height":130};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whco19wwk"/>`,
		"fallback": "thesvg-color:google-workspace-wordmark-dark",
	});
}

export default Component;
