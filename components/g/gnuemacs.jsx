import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcc6lny6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcc6lny6x"/>`,
		"fallback": "simple-icons:gnuemacs",
	});
}

export default Component;
