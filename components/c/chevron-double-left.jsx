import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/i/i7ci2f.css';
import '../../css/q/qe03jo.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c i7ci2f"/><path class="a0m25c qe03jo"/>`,
		"fallback": "line-md:chevron-double-left",
	});
}

export default Component;
