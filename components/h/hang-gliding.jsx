import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3-5arf6n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3-5arf6n"/>`,
		"fallback": "temaki:hang-gliding",
	});
}

export default Component;
