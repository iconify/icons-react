import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym2f5wksi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym2f5wksi"/>`,
		"fallback": "token:alfa1",
	});
}

export default Component;
