import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d8jjj50pd.css';
import '../../css/g/grn_1v_6f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d8jjj50pd"/><path class="grn_1v_6f"/></g>`,
		"fallback": "streamline-flex:camera-tripod",
	});
}

export default Component;
