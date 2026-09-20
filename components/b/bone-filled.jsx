import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lludr_bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lludr_bts"/>`,
		"fallback": "reicon:bone-filled",
	});
}

export default Component;
