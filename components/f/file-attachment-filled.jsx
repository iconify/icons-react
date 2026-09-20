import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29s4bc8i.css';
import '../../css/m/mb5862dny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29s4bc8i"/><path class="mb5862dny"/>`,
		"fallback": "tdesign:file-attachment-filled",
	});
}

export default Component;
