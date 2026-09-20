import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smyzkjknw.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smyzkjknw"/>`,
		"fallback": "wpf:archive2",
	});
}

export default Component;
