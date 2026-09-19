import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_l676bku.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_l676bku"/>`,
		"fallback": "glyphs:align-center-bold",
	});
}

export default Component;
