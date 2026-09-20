import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr5y6mbwg.css';
import '../../css/x/x6bcvoimv.css';
import '../../css/a/a49kqqbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr5y6mbwg"/><path class="x6bcvoimv"/><path class="a49kqqbom"/>`,
		"fallback": "streamline-ultimate:design-tool-fibonacci-bold",
	});
}

export default Component;
