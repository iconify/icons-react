import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7kqt_bhm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7kqt_bhm"/>`,
		"fallback": "glyphs:gift-outline",
	});
}

export default Component;
