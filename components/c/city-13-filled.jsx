import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgb7w0bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgb7w0bmt"/>`,
		"fallback": "tdesign:city-13-filled",
	});
}

export default Component;
