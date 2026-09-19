import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw-fxp2ag.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw-fxp2ag"/>`,
		"fallback": "ps:forrst",
	});
}

export default Component;
