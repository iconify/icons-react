import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct11--kks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct11--kks"/>`,
		"fallback": "streamline-plump:arrow-transfer-horizontal-square-solid",
	});
}

export default Component;
