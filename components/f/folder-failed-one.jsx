import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1exuwiz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw1exuwiz"/>`,
		"fallback": "icon-park-outline:folder-failed-one",
	});
}

export default Component;
