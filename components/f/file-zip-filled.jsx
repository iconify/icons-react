import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn39dyf6b.css';
import '../../css/j/jpc-28bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn39dyf6b"/><path class="jpc-28bbk"/>`,
		"fallback": "boxicons:file-zip-filled",
	});
}

export default Component;
