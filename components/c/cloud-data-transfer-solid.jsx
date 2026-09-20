import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc5w65bap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc5w65bap"/>`,
		"fallback": "streamline:cloud-data-transfer-solid",
	});
}

export default Component;
