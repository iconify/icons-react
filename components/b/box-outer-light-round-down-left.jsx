import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5p-rb7g.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5p-rb7g"/>`,
		"fallback": "memory:box-outer-light-round-down-left",
	});
}

export default Component;
