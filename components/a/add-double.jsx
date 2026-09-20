import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mea1p26cj.css';
import '../../css/h/hhgq12wfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mea1p26cj"/><path class="hhgq12wfv"/></g>`,
		"fallback": "streamline-cyber:add-double",
	});
}

export default Component;
