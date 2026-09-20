import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6oybf-di.css';
import '../../css/d/dh5g9c5ua.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6oybf-di"/><path class="dh5g9c5ua"/>`,
		"fallback": "vaadin:bug",
	});
}

export default Component;
