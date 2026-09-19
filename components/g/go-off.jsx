import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebn5a7bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebn5a7bks"/>`,
		"fallback": "cbi:go-off",
	});
}

export default Component;
