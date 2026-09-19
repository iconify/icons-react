import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywruj_bdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywruj_bdz"/>`,
		"fallback": "bi:filetype-txt",
	});
}

export default Component;
