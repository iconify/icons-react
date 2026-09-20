import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qxhmcbbod.css';
import '../../css/p/p4d2hebai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="qxhmcbbod"/><path class="p4d2hebai"/></g>`,
		"fallback": "streamline-cyber:heart-beat",
	});
}

export default Component;
