import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-99oa8q.css';
import '../../css/m/m7s4zt-mm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-99oa8q"/><path class="m7s4zt-mm"/>`,
		"fallback": "tdesign:file-json-filled",
	});
}

export default Component;
