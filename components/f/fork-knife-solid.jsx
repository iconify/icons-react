import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfh4iu6hg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qfh4iu6hg"/>`,
		"fallback": "streamline-plump:fork-knife-solid",
	});
}

export default Component;
