import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt_0hdbpq.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt_0hdbpq"/>`,
		"fallback": "fa-brands:erlang",
	});
}

export default Component;
