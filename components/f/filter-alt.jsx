import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/fhjn7n.css';
import '../../css/t/tj796y.css';
import '../../css/o/otlizu.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c fhjn7n"/><path class="a0m25c tj796y"/><path class="a0m25c otlizu"/>`,
		"fallback": "line-md:filter-alt",
	});
}

export default Component;
