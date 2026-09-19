import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz-3kdwdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hz-3kdwdt"/>`,
		"fallback": "akar-icons:check-box-fill",
	});
}

export default Component;
