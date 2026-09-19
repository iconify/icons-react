import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf2uan53j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf2uan53j"/>`,
		"fallback": "gg:format-uppercase",
	});
}

export default Component;
