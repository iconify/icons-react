import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8rlu56bh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8rlu56bh"/>`,
		"fallback": "streamline-plump:bill-1-remix",
	});
}

export default Component;
