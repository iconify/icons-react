import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea04238yl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/onknveb8i.css';
import '../../css/y/yk6f5ab7y.css';
import '../../css/v/vgnpgzlku.css';
import '../../css/q/qfm2x7qqk.css';
import '../../css/i/iyq7m2bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea04238yl secondary"/><g class="dt0cm9dhy primary"><path class="onknveb8i"/><path class="yk6f5ab7y"/><path class="vgnpgzlku"/><path class="qfm2x7qqk"/><path class="iyq7m2bgi"/></g>`,
		"fallback": "iconaut:grill-duo",
	});
}

export default Component;
