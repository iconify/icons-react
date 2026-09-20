import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijvh1tbsh.css';
import '../../css/y/yssl9cbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ijvh1tbsh"/><path class="yssl9cbvj"/></g>`,
		"fallback": "reicon:card-pos",
	});
}

export default Component;
