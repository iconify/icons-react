import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-cuabjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lh-cuabjk"/>`,
		"fallback": "streamline-plump:fill-and-sign-remix",
	});
}

export default Component;
