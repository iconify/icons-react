import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwbjdtb4m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwbjdtb4m"/>`,
		"fallback": "fluent-mdl2:defect-solid",
	});
}

export default Component;
