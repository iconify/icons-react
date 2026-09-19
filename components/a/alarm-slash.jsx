import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqih_6qlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqih_6qlj"/>`,
		"fallback": "boxicons:alarm-slash",
	});
}

export default Component;
