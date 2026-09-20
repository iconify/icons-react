import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yznohx6xw.css';
import '../../css/j/jd5tbsb7k.css';
import '../../css/c/cqcpatb5d.css';
import '../../css/o/oqgiolb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yznohx6xw"/><path class="jd5tbsb7k"/><circle class="cqcpatb5d"/><circle class="oqgiolb7e"/></g>`,
		"fallback": "reicon:forklift",
	});
}

export default Component;
