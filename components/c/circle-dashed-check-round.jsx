import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4h-lfodh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4h-lfodh"/>`,
		"fallback": "coolicons:circle-dashed-check-round",
	});
}

export default Component;
