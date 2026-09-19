import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/az9839bnb.css';
import '../../css/c/cupn25bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="az9839bnb"/><path class="cupn25bpd"/></g>`,
		"fallback": "iconoir:bitbucket",
	});
}

export default Component;
