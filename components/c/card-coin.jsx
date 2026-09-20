import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6umjrccz.css';
import '../../css/i/i4kgd7muz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6umjrccz"/><path class="i4kgd7muz"/></g>`,
		"fallback": "reicon:card-coin",
	});
}

export default Component;
