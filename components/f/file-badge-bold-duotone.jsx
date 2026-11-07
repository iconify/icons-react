import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgissgbda.css';
import '../../css/w/w1wl29bmf.css';
import '../../css/c/ckoc0pbbx.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgissgbda"/><path class="w1wl29bmf"/><path class="ckoc0pbbx"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-badge-bold-duotone",
	});
}

export default Component;
