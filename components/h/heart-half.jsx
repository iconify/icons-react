import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssm45ytaj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssm45ytaj"/>`,
		"fallback": "glyphs:heart-half",
	});
}

export default Component;
