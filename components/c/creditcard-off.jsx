import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nykla4b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nykla4b4w"/>`,
		"fallback": "tdesign:creditcard-off",
	});
}

export default Component;
