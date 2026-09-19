import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/q/qfh1dz3dh.css';
import '../../css/d/denxdxots.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="qfh1dz3dh"/><path class="denxdxots"/></g>`,
		"fallback": "akar-icons:align-top",
	});
}

export default Component;
