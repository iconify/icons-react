import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myo-w__1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myo-w__1j"/>`,
		"fallback": "streamline-plump-color:flash-1-flat",
	});
}

export default Component;
