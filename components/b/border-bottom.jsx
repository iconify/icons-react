import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alf0tiuoe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alf0tiuoe"/>`,
		"fallback": "memory:border-bottom",
	});
}

export default Component;
