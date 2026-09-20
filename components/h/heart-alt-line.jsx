import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrc_o7bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vrc_o7bzk"/>`,
		"fallback": "si:heart-alt-line",
	});
}

export default Component;
