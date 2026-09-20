import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9e90ybcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9e90ybcf"/>`,
		"fallback": "streamline-plump:disable-heart",
	});
}

export default Component;
