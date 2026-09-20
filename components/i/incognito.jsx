import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn0_e_zgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rn0_e_zgk"/>`,
		"fallback": "reicon:incognito",
	});
}

export default Component;
