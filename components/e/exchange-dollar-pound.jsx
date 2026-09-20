import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh4szs_3k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh4szs_3k"/>`,
		"fallback": "roentgen:exchange-dollar-pound",
	});
}

export default Component;
