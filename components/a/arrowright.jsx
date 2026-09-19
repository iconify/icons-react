import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmntw8r6r.css';
import '../../css/l/lc5m63-4i.css';

const viewBox = {"width":16,"height":9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmntw8r6r"/><path class="lc5m63-4i"/>`,
		"fallback": "formkit:arrowright",
	});
}

export default Component;
