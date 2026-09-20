import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9i7q_bed.css';
import '../../css/s/s669v5bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9i7q_bed"/><path class="s669v5bjw"/></g>`,
		"fallback": "reicon:eye3",
	});
}

export default Component;
