import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zsvswebmo.css';
import '../../css/p/pt65lxf3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zsvswebmo"/><path class="pt65lxf3h"/></g>`,
		"fallback": "streamline-cyber:credit-card-visa",
	});
}

export default Component;
