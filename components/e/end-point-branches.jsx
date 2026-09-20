import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an5k26h0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an5k26h0b"/>`,
		"fallback": "streamline-plump:end-point-branches",
	});
}

export default Component;
