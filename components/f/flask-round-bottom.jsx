import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2dgx96ux.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2dgx96ux"/>`,
		"fallback": "memory:flask-round-bottom",
	});
}

export default Component;
