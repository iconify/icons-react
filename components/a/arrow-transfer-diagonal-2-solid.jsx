import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm6ateb4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vm6ateb4n"/>`,
		"fallback": "streamline:arrow-transfer-diagonal-2-solid",
	});
}

export default Component;
