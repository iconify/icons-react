import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gki61o8vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gki61o8vz"/>`,
		"fallback": "eos-icons:application-incomplete",
	});
}

export default Component;
