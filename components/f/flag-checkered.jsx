import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6bqpgb6d.css';
import '../../css/r/rasj23r5y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6bqpgb6d"/><path class="rasj23r5y"/>`,
		"fallback": "vaadin:flag-checkered",
	});
}

export default Component;
