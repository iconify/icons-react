import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5549tbpb.css';
import '../../css/z/zr90yfbxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5549tbpb"/><path class="zr90yfbxo"/>`,
		"fallback": "selfhst:connectwise-screenconnect-light",
	});
}

export default Component;
