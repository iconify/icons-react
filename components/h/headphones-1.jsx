import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t6gpi-fjy.css';
import '../../css/g/g7gexobhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t6gpi-fjy"/><path class="g7gexobhd"/></g>`,
		"fallback": "streamline-ultimate:headphones-1",
	});
}

export default Component;
