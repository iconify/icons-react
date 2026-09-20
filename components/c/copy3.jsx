import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dise_5b_a.css';
import '../../css/h/hdbrksbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dise_5b_a"/><path class="hdbrksbtw"/></g>`,
		"fallback": "reicon:copy3",
	});
}

export default Component;
