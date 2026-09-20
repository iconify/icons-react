import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/f5s6pk.css';
import '../../css/o/or6sls.css';
import '../../css/z/znhgjx.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c f5s6pk"/><path class="a0m25c or6sls"/><path class="a0m25c znhgjx"/>`,
		"fallback": "line-md:arrow-left-square",
	});
}

export default Component;
