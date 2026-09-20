import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq1ifdc2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq1ifdc2t"/>`,
		"fallback": "pixelarticons:badge-5k",
	});
}

export default Component;
