import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oplz0d5gv.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oplz0d5gv"/>`,
		"fallback": "whh:fontsansserif",
	});
}

export default Component;
