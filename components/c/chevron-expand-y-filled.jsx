import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r05oocb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r05oocb5h"/>`,
		"fallback": "reicon:chevron-expand-y-filled",
	});
}

export default Component;
