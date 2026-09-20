import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocj5ybcgv.css';
import '../../css/f/fhz4q76lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocj5ybcgv"/><path class="fhz4q76lt"/>`,
		"fallback": "streamline-ultimate:allowances-no-photos-bold",
	});
}

export default Component;
