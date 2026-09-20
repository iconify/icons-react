import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezsce_bmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ezsce_bmk"/>`,
		"fallback": "streamline-plump:braille-blind-remix",
	});
}

export default Component;
