import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knxbbqb7y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knxbbqb7y"/>`,
		"fallback": "memory:flask-round-bottom-empty",
	});
}

export default Component;
