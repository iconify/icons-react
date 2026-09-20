import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fet9u96nq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fet9u96nq"/>`,
		"fallback": "streamline-plump:end-point-branches-solid",
	});
}

export default Component;
