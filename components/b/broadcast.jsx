import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jxl67pbry.css';
import '../../css/t/t35oomb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="jxl67pbry"/><path class="t35oomb7j"/></g>`,
		"fallback": "codex:broadcast",
	});
}

export default Component;
