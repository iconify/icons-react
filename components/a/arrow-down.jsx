import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/dzccmg.css';
import '../../css/r/r85jsh.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c dzccmg"/><path class="a0m25c r85jsh"/>`,
		"fallback": "line-md:arrow-down",
	});
}

export default Component;
