import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmmy2rb5f.css';
import '../../css/b/b-h_hbciq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmmy2rb5f"/><path class="b-h_hbciq"/>`,
		"fallback": "boxicons:folder-down-arrow",
	});
}

export default Component;
