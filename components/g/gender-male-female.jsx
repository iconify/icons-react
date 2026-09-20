import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l7y3hub1d.css';
import '../../css/z/zjb977bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="l7y3hub1d"/><path class="zjb977bjv"/></g>`,
		"fallback": "streamline-cyber:gender-male-female",
	});
}

export default Component;
