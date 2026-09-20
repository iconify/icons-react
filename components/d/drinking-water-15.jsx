import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saq9jgb9j.css';
import '../../css/q/qyfnmsb6o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saq9jgb9j"/><path class="qyfnmsb6o"/>`,
		"fallback": "maki:drinking-water-15",
	});
}

export default Component;
