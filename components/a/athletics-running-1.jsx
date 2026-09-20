import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh39jqbpi.css';
import '../../css/p/pp2-2-clv.css';
import '../../css/h/hsyqjxz4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yh39jqbpi"/><path class="pp2-2-clv"/><path class="hsyqjxz4o"/></g>`,
		"fallback": "streamline-ultimate:athletics-running-1",
	});
}

export default Component;
