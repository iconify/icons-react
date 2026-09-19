import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr11d0b7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr11d0b7f"/>`,
		"fallback": "glyphs:certificate-duo",
	});
}

export default Component;
