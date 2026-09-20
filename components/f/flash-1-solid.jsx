import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7q32y5jl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7q32y5jl"/>`,
		"fallback": "streamline-plump:flash-1-solid",
	});
}

export default Component;
