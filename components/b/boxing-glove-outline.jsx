import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wye1xtbgp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wye1xtbgp"/>`,
		"fallback": "glyphs:boxing-glove-outline",
	});
}

export default Component;
