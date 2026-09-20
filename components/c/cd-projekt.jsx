import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwdb95dxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwdb95dxg"/>`,
		"fallback": "thesvg-color:cd-projekt",
	});
}

export default Component;
