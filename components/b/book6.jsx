import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sxg-3h69h.css';
import '../../css/q/qo4pcjauq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sxg-3h69h"/><path class="qo4pcjauq"/></g>`,
		"fallback": "reicon:book6",
	});
}

export default Component;
