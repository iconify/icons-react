import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-9fnb75y.css';
import '../../css/m/mhsgamb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-9fnb75y"/><path class="mhsgamb8d"/>`,
		"fallback": "tdesign:folder-locked-filled",
	});
}

export default Component;
