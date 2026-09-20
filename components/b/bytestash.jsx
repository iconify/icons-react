import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itfxq4bji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itfxq4bji"/>`,
		"fallback": "selfhst:bytestash",
	});
}

export default Component;
