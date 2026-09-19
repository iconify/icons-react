import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsb5dgbgd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsb5dgbgd"/>`,
		"fallback": "fa6-solid:dice-six",
	});
}

export default Component;
