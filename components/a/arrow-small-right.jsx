import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/ouq-2x.css';
import '../../css/x/xc5v5l.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ouq-2x"/><path class="a0m25c xc5v5l"/>`,
		"fallback": "line-md:arrow-small-right",
	});
}

export default Component;
