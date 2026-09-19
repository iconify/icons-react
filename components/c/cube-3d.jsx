import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm77mwb7x.css';
import '../../css/r/rjes9k1zx.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm77mwb7x"/><path class="rjes9k1zx"/>`,
		"fallback": "gis:cube-3d",
	});
}

export default Component;
