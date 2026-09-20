import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/p0bift.css';
import '../../css/e/eygq0a.css';
import '../../css/r/rp-3po.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c p0bift"/><path class="a0m25c eygq0a"/><path class="a0m25c rp-3po"/>`,
		"fallback": "line-md:arrow-up-circle",
	});
}

export default Component;
