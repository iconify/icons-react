import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chr3v_s-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chr3v_s-k"/>`,
		"fallback": "thesvg:clarifai",
	});
}

export default Component;
