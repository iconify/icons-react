import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz3d-2pmb.css';
import '../../css/s/spm3uswvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz3d-2pmb"/><path class="spm3uswvo"/>`,
		"fallback": "pixel:edit",
	});
}

export default Component;
