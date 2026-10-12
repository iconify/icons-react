import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klbmyhl8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klbmyhl8l"/>`,
		"fallback": "garden:indent-increase-20",
	});
}

export default Component;
