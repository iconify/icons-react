import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/a5d84bcuv.css';
import '../../css/g/gnusqx75u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="a5d84bcuv"/><path class="gnusqx75u"/></g>`,
		"fallback": "streamline-cyber:baby-milk-bottle",
	});
}

export default Component;
