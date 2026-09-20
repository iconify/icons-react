import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na7hrpbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="na7hrpbsq"/>`,
		"fallback": "streamline-plump:arrow-up-4-solid",
	});
}

export default Component;
