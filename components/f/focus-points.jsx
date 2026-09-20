import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzswmf6nk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzswmf6nk"/>`,
		"fallback": "streamline-plump-color:focus-points",
	});
}

export default Component;
