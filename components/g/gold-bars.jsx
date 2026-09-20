import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d61aq9b1d.css';
import '../../css/f/fla-hqb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d61aq9b1d"/><path class="fla-hqb7j"/></g>`,
		"fallback": "streamline-ultimate:gold-bars",
	});
}

export default Component;
