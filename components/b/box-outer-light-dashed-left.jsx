import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4qdjfbbn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4qdjfbbn"/>`,
		"fallback": "memory:box-outer-light-dashed-left",
	});
}

export default Component;
