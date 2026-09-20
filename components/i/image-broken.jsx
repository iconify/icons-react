import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4rx783-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4rx783-t"/>`,
		"fallback": "pixelarticons:image-broken",
	});
}

export default Component;
