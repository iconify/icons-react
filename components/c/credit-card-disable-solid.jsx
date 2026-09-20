import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kclp8acnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kclp8acnr"/>`,
		"fallback": "streamline-sharp:credit-card-disable-solid",
	});
}

export default Component;
