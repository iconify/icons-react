import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/twlvgibdw.css';
import '../../css/e/eyclxt8ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="twlvgibdw"/><path class="eyclxt8ne"/></g>`,
		"fallback": "streamline-cyber:hand-hexagon",
	});
}

export default Component;
