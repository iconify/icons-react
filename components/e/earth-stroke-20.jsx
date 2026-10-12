import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7mn0ssnc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7mn0ssnc"/>`,
		"fallback": "garden:earth-stroke-20",
	});
}

export default Component;
