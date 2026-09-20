import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwhb53btz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwhb53btz"/>`,
		"fallback": "pinhead:coffee-mug-and-pawprint",
	});
}

export default Component;
