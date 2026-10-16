import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un6uujgpt.css';
import '../../css/s/s-3pdzbie.css';
import '../../css/f/f9_1u9bdt.css';
import '../../css/h/hbrmujrkd.css';

const viewBox = {"width":154,"height":154};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(.11 .11)"><circle class="un6uujgpt"/><g class="s-3pdzbie"><path class="f9_1u9bdt"/><path class="hbrmujrkd"/></g></g>`,
		"fallback": "thesvg-color:apprise-api",
	});
}

export default Component;
