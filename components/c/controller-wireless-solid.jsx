import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hckli2bmm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hckli2bmm"/>`,
		"fallback": "streamline-flex:controller-wireless-solid",
	});
}

export default Component;
