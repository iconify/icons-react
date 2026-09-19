import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou0e5zlit.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou0e5zlit"/>`,
		"fallback": "fa7-solid:bug",
	});
}

export default Component;
