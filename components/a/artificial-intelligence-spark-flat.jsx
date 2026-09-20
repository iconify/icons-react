import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k74zmrt5z.css';
import '../../css/v/v54ddhb6a.css';
import '../../css/x/xjxlwd61i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k74zmrt5z"/><path class="v54ddhb6a"/><path clip-rule="evenodd" class="xjxlwd61i"/></g>`,
		"fallback": "streamline-color:artificial-intelligence-spark-flat",
	});
}

export default Component;
