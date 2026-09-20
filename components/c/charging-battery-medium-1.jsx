import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0gnqkbal.css';
import '../../css/l/lznxy4hta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i0gnqkbal"/><path class="lznxy4hta"/></g>`,
		"fallback": "streamline-ultimate:charging-battery-medium-1",
	});
}

export default Component;
