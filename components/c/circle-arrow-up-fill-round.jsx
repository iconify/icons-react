import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p656s3qqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p656s3qqu"/>`,
		"fallback": "coolicons:circle-arrow-up-fill-round",
	});
}

export default Component;
