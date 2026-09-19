import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2nwwzbuq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2nwwzbuq"/>`,
		"fallback": "f7:arrow-up-arrow-down-square-fill",
	});
}

export default Component;
