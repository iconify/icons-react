import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q71dgkbeb.css';
import '../../css/y/yu6xp2bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q71dgkbeb"/><path class="yu6xp2bdk"/></g>`,
		"fallback": "hugeicons:ear",
	});
}

export default Component;
