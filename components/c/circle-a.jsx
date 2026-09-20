import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cizwry8ue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cizwry8ue"/>`,
		"fallback": "pinhead:circle-a",
	});
}

export default Component;
