import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usm6v_bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="usm6v_bue"/>`,
		"fallback": "reicon:angle-up-square-filled",
	});
}

export default Component;
