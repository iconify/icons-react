import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/owchssbpb.css';
import '../../css/d/dqvcc2bxc.css';
import '../../css/w/wb2sz73pt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="owchssbpb"/><path class="dqvcc2bxc"/><path class="wb2sz73pt"/></g>`,
		"fallback": "reicon:buy-crypto",
	});
}

export default Component;
