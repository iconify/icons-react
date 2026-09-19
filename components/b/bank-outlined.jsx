import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpspd0b0x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpspd0b0x"/>`,
		"fallback": "ant-design:bank-outlined",
	});
}

export default Component;
