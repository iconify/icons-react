import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjrs50btb.css';
import '../../css/c/cig9b4c-v.css';
import '../../css/z/zp7f7h2us.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjrs50btb"/><path class="cig9b4c-v"/><path class="zp7f7h2us"/>`,
		"fallback": "streamline-pixel:beauty-barber-light-sign",
	});
}

export default Component;
