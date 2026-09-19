import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jor-usn7v.css';
import '../../css/t/t7w3f5b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b jor-usn7v"/><path class="b t7w3f5b3c"/>`,
		"fallback": "boxicons:background-color-fill",
	});
}

export default Component;
