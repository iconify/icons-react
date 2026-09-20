import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek99z1eri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ek99z1eri"/>`,
		"fallback": "streamline-plump:burger-remix",
	});
}

export default Component;
