import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp9dl-m0w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp9dl-m0w"/>`,
		"fallback": "fluent-mdl2:bug",
	});
}

export default Component;
