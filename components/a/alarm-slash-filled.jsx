import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv5p8fbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv5p8fbpj"/>`,
		"fallback": "boxicons:alarm-slash-filled",
	});
}

export default Component;
