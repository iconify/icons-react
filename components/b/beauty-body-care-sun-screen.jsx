import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6jafybzb.css';
import '../../css/q/qq3dmvb4d.css';
import '../../css/s/swx-crbgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6jafybzb"/><path class="qq3dmvb4d"/><path class="swx-crbgj"/>`,
		"fallback": "streamline-pixel:beauty-body-care-sun-screen",
	});
}

export default Component;
