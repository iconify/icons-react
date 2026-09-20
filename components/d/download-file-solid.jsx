import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm5w17bnr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qm5w17bnr"/>`,
		"fallback": "streamline:download-file-solid",
	});
}

export default Component;
