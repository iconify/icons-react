import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orb9p3cfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orb9p3cfb"/>`,
		"fallback": "thesvg-color:cryengine",
	});
}

export default Component;
