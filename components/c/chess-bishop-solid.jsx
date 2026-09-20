import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s40586bts.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s40586bts"/>`,
		"fallback": "la:chess-bishop-solid",
	});
}

export default Component;
