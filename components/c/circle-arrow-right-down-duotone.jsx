import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7kf2hbsh.css';
import '../../css/z/zef538hbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i7kf2hbsh"/><path class="zef538hbv"/></g>`,
		"fallback": "reicon:circle-arrow-right-down-duotone",
	});
}

export default Component;
