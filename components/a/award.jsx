import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbikvqbiv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbikvqbiv"/>`,
		"fallback": "fa6-solid:award",
	});
}

export default Component;
