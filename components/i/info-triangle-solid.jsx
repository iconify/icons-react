import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onw5m771l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="onw5m771l"/>`,
		"fallback": "basil:info-triangle-solid",
	});
}

export default Component;
