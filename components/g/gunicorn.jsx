import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw3wmisvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw3wmisvc"/>`,
		"fallback": "simple-icons:gunicorn",
	});
}

export default Component;
