import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lck50fbaf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lck50fbaf"/>`,
		"fallback": "memory:cloud-up",
	});
}

export default Component;
