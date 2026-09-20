import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz21tryay.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz21tryay"/>`,
		"fallback": "streamline-flex:auto-correction-check-solid",
	});
}

export default Component;
