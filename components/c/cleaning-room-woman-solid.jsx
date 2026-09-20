import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mizypeb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mizypeb8u"/>`,
		"fallback": "streamline-plump:cleaning-room-woman-solid",
	});
}

export default Component;
