import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1ndrfb_z.css';
import '../../css/x/x4f46-b2l.css';
import '../../css/a/ayfii2kus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1ndrfb_z"/><path class="x4f46-b2l"/><path class="ayfii2kus"/>`,
		"fallback": "solar:file-corrupted-bold-duotone",
	});
}

export default Component;
