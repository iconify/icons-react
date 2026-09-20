import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfn4_0bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfn4_0bxg"/>`,
		"fallback": "pixelarticons:circle",
	});
}

export default Component;
