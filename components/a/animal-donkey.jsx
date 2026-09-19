import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl35e_bvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl35e_bvu"/>`,
		"fallback": "healthicons:animal-donkey",
	});
}

export default Component;
