import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj95wxtxg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj95wxtxg"/>`,
		"fallback": "devicon-plain:backbonejs",
	});
}

export default Component;
