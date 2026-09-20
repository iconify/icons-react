import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3n6v8ksz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3n6v8ksz"/>`,
		"fallback": "selfhst:adobe-lightroom-dark",
	});
}

export default Component;
