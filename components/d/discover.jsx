import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/k/k5m2if1qz.css';
import '../../css/w/wgz_qwbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="k5m2if1qz"/><path class="wgz_qwbxf"/></g>`,
		"fallback": "reicon:discover",
	});
}

export default Component;
