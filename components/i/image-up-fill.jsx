import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geb6jiw3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geb6jiw3j"/>`,
		"fallback": "mingcute:image-up-fill",
	});
}

export default Component;
