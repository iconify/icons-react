import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csd7vtbst.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csd7vtbst"/>`,
		"fallback": "pinhead:desk-lamp",
	});
}

export default Component;
