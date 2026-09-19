import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9zer_buq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9zer_buq"/>`,
		"fallback": "bi:currency-pound",
	});
}

export default Component;
