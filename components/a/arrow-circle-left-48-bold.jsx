import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/o/oyr60yb7q.css';
import '../../css/t/tkn0jlbsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="oyr60yb7q"/><path class="tkn0jlbsu"/>`,
		"fallback": "energy-icons:arrow-circle-left-48-bold",
	});
}

export default Component;
