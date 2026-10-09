import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajd3grb8j.css';
import '../../css/d/dk-jr4bqr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajd3grb8j"/><path class="dk-jr4bqr"/>`,
		"fallback": "energy-icons:gallery-20",
	});
}

export default Component;
