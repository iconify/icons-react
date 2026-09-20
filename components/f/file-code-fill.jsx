import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iss_gdbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iss_gdbfn"/>`,
		"fallback": "ri:file-code-fill",
	});
}

export default Component;
