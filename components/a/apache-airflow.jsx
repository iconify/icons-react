import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mygfwmz8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mygfwmz8h"/>`,
		"fallback": "thesvg:apache-airflow",
	});
}

export default Component;
