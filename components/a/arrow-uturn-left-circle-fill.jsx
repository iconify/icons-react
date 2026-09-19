import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsf6grz5a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsf6grz5a"/>`,
		"fallback": "f7:arrow-uturn-left-circle-fill",
	});
}

export default Component;
