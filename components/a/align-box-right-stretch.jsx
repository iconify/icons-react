import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv7socc2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv7socc2d"/>`,
		"fallback": "tabler:align-box-right-stretch",
	});
}

export default Component;
