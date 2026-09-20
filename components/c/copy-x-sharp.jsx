import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pge1vjbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pge1vjbxg"/>`,
		"fallback": "pixelarticons:copy-x-sharp",
	});
}

export default Component;
