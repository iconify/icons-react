import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tctkn4c7t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tctkn4c7t"/>`,
		"fallback": "memory:box-outer-light-dashed-up-right",
	});
}

export default Component;
