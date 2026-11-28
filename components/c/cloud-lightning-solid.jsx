import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5zjp3gfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5zjp3gfl"/>`,
		"fallback": "iconaut:cloud-lightning-solid",
	});
}

export default Component;
