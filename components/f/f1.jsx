import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o33rqeb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o33rqeb7v"/>`,
		"fallback": "simple-icons:f1",
	});
}

export default Component;
