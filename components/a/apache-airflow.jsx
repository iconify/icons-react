import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkk-kyy9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkk-kyy9o"/>`,
		"fallback": "cib:apache-airflow",
	});
}

export default Component;
