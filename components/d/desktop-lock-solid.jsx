import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knamxxb9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knamxxb9n"/>`,
		"fallback": "streamline-plump:desktop-lock-solid",
	});
}

export default Component;
