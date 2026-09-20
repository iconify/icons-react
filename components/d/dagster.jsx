import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y084-wbbv.css';
import '../../css/h/hvnqnlbmu.css';
import '../../css/j/js9j7cc9u.css';
import '../../css/b/bj-8yzcrx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y084-wbbv"/><path class="hvnqnlbmu"/><path class="js9j7cc9u"/><path class="bj-8yzcrx"/>`,
		"fallback": "selfhst:dagster",
	});
}

export default Component;
