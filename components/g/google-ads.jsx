import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jraag1gus.css';
import '../../css/t/tzb2l-bbx.css';
import '../../css/g/g8-jwabbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jraag1gus"/><path class="tzb2l-bbx"/><circle transform="rotate(25 12.083 36.688)" class="g8-jwabbb"/></g>`,
		"fallback": "icon-park-outline:google-ads",
	});
}

export default Component;
