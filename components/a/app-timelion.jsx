import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq4kfps6d.css';
import '../../css/w/wacxq1bmw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jq4kfps6d"/><path class="ouiIcon__fillSecondary wacxq1bmw"/></g>`,
		"fallback": "oui:app-timelion",
	});
}

export default Component;
