import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o-olbebmp.css';
import '../../css/g/gn889513z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="o-olbebmp"/><path class="gn889513z"/></g>`,
		"fallback": "streamline-cyber:dress",
	});
}

export default Component;
