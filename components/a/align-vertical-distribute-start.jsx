import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3_iqvbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3_iqvbak"/>`,
		"fallback": "pixelarticons:align-vertical-distribute-start",
	});
}

export default Component;
