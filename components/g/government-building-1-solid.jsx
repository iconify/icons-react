import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1zsatqkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e1zsatqkn"/>`,
		"fallback": "streamline-plump:government-building-1-solid",
	});
}

export default Component;
