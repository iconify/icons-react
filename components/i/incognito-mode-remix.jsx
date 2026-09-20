import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otjgdrbcq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otjgdrbcq"/>`,
		"fallback": "streamline-plump:incognito-mode-remix",
	});
}

export default Component;
