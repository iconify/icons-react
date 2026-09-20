import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux02sgbdo.css';
import '../../css/a/aqhlej3kq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux02sgbdo"/><path class="aqhlej3kq"/>`,
		"fallback": "streamline-pixel:health-ambulance-call",
	});
}

export default Component;
