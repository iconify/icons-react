import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pt65lxf3h.css';
import '../../css/e/em_84jeaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pt65lxf3h"/><path class="em_84jeaq"/></g>`,
		"fallback": "streamline-cyber:credit-card-1",
	});
}

export default Component;
