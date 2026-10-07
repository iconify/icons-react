import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cm4astalv.css';
import '../../css/u/utwll5b5g.css';
import '../../css/i/i-1ikz0yc.css';
import '../../css/o/oldewbc6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cm4astalv"/><path class="utwll5b5g"/><path class="i-1ikz0yc"/><path class="oldewbc6a"/></g>`,
		"fallback": "iconoir:database-backup",
	});
}

export default Component;
