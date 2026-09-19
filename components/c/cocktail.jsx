import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpoa93vo.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjpoa93vo"/>`,
		"fallback": "fa-solid:cocktail",
	});
}

export default Component;
