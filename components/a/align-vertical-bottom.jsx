import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic5m1gpux.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic5m1gpux"/>`,
		"fallback": "memory:align-vertical-bottom",
	});
}

export default Component;
