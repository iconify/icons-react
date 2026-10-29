import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kky9d-ehz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kky9d-ehz"/>`,
		"fallback": "withicons:factory-solid",
	});
}

export default Component;
