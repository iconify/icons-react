import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9hdtjbtt.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9hdtjbtt"/>`,
		"fallback": "fontisto:day-lightning",
	});
}

export default Component;
