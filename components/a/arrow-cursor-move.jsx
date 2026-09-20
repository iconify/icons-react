import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh08u7trk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh08u7trk"/>`,
		"fallback": "streamline-plump:arrow-cursor-move",
	});
}

export default Component;
