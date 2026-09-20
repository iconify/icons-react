import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diuxkcx9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="diuxkcx9m"/>`,
		"fallback": "ri:file-paper-2-line",
	});
}

export default Component;
