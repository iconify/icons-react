import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3n9u1q-k.css';
import '../../css/j/jmguqjm_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3n9u1q-k"/><path class="jmguqjm_t"/>`,
		"fallback": "tdesign:file-transmit-double-filled",
	});
}

export default Component;
