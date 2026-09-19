import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngcsrbb7v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngcsrbb7v"/>`,
		"fallback": "fluent-mdl2:filters-solid",
	});
}

export default Component;
