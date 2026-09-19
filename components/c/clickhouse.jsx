import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohc817x8z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohc817x8z"/>`,
		"fallback": "devicon-plain:clickhouse",
	});
}

export default Component;
