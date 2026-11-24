import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g61trzimo.css';
import '../../css/u/u0m-i_fxn.css';
import '../../css/k/k6ug5mbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g61trzimo"/><path class="u0m-i_fxn"/><path class="k6ug5mbpr"/>`,
		"fallback": "lucide-extended:file-code-corner-filled",
	});
}

export default Component;
