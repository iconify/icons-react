import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4bs_w5rn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4bs_w5rn"/>`,
		"fallback": "streamline-plump:file-check-alternate-solid",
	});
}

export default Component;
