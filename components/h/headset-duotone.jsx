import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf2opmbjc.css';
import '../../css/r/r2zxf_bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qf2opmbjc"/><path class="r2zxf_bti"/>`,
		"fallback": "stash:headset-duotone",
	});
}

export default Component;
