import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgajy22ee.css';
import '../../css/f/fxn-nbfom.css';
import '../../css/v/vac8d1bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qgajy22ee"/><path class="fxn-nbfom"/><path class="vac8d1bao"/></g>`,
		"fallback": "iconoir:basketball-alt",
	});
}

export default Component;
