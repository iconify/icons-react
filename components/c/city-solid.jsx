import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqc13dx2j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqc13dx2j"/>`,
		"fallback": "la:city-solid",
	});
}

export default Component;
