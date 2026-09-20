import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj93u0bqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lj93u0bqx"/>`,
		"fallback": "streamline-plump:flip-horizontal-circle-1-solid",
	});
}

export default Component;
