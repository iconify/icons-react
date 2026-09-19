import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfwp58bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfwp58bqk"/>`,
		"fallback": "heroicons:arrow-uturn-up",
	});
}

export default Component;
