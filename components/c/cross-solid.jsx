import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o204y9n4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o204y9n4v"/>`,
		"fallback": "pixelarticons:cross-solid",
	});
}

export default Component;
