import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf6-64bai.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf6-64bai"/>`,
		"fallback": "pinhead:ice-pop",
	});
}

export default Component;
