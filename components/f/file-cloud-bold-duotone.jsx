import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgd8bzbml.css';
import '../../css/e/ey6plua8r.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgd8bzbml"/><path class="ey6plua8r"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-cloud-bold-duotone",
	});
}

export default Component;
