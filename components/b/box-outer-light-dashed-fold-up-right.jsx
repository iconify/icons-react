import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc0fhdhtj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc0fhdhtj"/>`,
		"fallback": "memory:box-outer-light-dashed-fold-up-right",
	});
}

export default Component;
