import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qthlx5b4d.css';
import '../../css/s/shxoidcvw.css';
import '../../css/e/ec7r83b9y.css';
import '../../css/d/dexvbquxk.css';
import '../../css/y/yx4uo46pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qthlx5b4d"/><path class="shxoidcvw"/><path class="ec7r83b9y"/><path class="dexvbquxk"/><path class="yx4uo46pj"/></g>`,
		"fallback": "matita:database",
	});
}

export default Component;
