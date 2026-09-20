import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt14qzb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt14qzb_d"/>`,
		"fallback": "tdesign:file-1-filled",
	});
}

export default Component;
