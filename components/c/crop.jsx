import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glg9711yw.css';
import '../../css/g/go1ki5bko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glg9711yw"/><path class="go1ki5bko"/>`,
		"fallback": "famicons:crop",
	});
}

export default Component;
