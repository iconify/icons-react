import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rxp23_3og.css';
import '../../css/b/bnw9o7z0h.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rxp23_3og"/><path class="bnw9o7z0h wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:bug-off",
	});
}

export default Component;
