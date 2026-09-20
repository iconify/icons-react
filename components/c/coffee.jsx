import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfujh6bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfujh6bma"/>`,
		"fallback": "vadivam:coffee",
	});
}

export default Component;
