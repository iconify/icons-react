import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6n_bjbos.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6n_bjbos"/>`,
		"fallback": "carbon:chart-line-smooth",
	});
}

export default Component;
