import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt5_813gx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gt5_813gx"/>`,
		"fallback": "streamline:box-sign-solid",
	});
}

export default Component;
