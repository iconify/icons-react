import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/roeig9o6s.css';
import '../../css/o/of0mpbbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="roeig9o6s"/><path class="of0mpbbjq"/></g>`,
		"fallback": "streamline-cyber:basketball",
	});
}

export default Component;
