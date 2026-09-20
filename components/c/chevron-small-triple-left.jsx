import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/ew1mpj.css';
import '../../css/m/m0_dsb.css';
import '../../css/j/ju1zuh.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ew1mpj"/><path class="a0m25c m0_dsb"/><path class="a0m25c ju1zuh"/>`,
		"fallback": "line-md:chevron-small-triple-left",
	});
}

export default Component;
