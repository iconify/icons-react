import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl26tzb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vl26tzb5p"/>`,
		"fallback": "solar:clound-cross-outline",
	});
}

export default Component;
