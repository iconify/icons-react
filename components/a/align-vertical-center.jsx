import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/q/q0m24db3d.css';
import '../../css/i/idhaus_4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="q0m24db3d"/><path class="idhaus_4a"/></g>`,
		"fallback": "akar-icons:align-vertical-center",
	});
}

export default Component;
