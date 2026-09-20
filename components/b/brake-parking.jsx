import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/i/iqxnjc.css';
import '../../css/g/g_t0ty.css';
import '../../css/v/v562ka.css';
import '../../css/x/xfp3iz.css';
import '../../css/s/so-from-54.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c iqxnjc"/><path class="a0m25c g_t0ty"/><path class="a0m25c v562ka"/><path class="a0m25c xfp3iz"/>`,
		"fallback": "line-md:brake-parking",
	});
}

export default Component;
