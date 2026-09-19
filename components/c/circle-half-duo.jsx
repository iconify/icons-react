import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqkx1pdm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqkx1pdm"/>`,
		"fallback": "glyphs:circle-half-duo",
	});
}

export default Component;
