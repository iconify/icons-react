import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeig_sbyw.css';
import '../../css/z/zvd_26b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeig_sbyw"/><path class="zvd_26b4k"/>`,
		"fallback": "tdesign:battery-charging-filled",
	});
}

export default Component;
