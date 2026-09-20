import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de49-_pzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de49-_pzp"/>`,
		"fallback": "simple-icons:homarr",
	});
}

export default Component;
