import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl30c4zma.css';
import '../../css/n/nm-0yofzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl30c4zma"/><path class="nm-0yofzq"/>`,
		"fallback": "tdesign:city-filled",
	});
}

export default Component;
