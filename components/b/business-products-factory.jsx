import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_s9uacqw.css';
import '../../css/v/vvr88kt2y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_s9uacqw"/><path class="vvr88kt2y"/>`,
		"fallback": "streamline-pixel:business-products-factory",
	});
}

export default Component;
