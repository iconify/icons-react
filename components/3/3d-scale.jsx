import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h5n29aplr.css';
import '../../css/x/xhmchbbcz.css';
import '../../css/v/vbxwv1jti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h5n29aplr"/><path class="xhmchbbcz"/><path class="vbxwv1jti"/></g>`,
		"fallback": "streamline-sharp-color:3d-scale",
	});
}

export default Component;
