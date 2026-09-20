import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3519c2nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3519c2nn"/>`,
		"fallback": "majesticons:clock-plus-line",
	});
}

export default Component;
