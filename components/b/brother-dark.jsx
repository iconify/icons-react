import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i112icc0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i112icc0b"/>`,
		"fallback": "selfhst:brother-dark",
	});
}

export default Component;
