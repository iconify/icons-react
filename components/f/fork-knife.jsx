import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mks-38b5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mks-38b5b"/>`,
		"fallback": "streamline-plump:fork-knife",
	});
}

export default Component;
