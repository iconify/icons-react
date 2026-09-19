import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zavsg-4bn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zavsg-4bn"/>`,
		"fallback": "fa-brands:ember",
	});
}

export default Component;
