import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmmy2rb5f.css';
import '../../css/y/yqu1lvw7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmmy2rb5f"/><path class="yqu1lvw7w"/>`,
		"fallback": "boxicons:folder-plus",
	});
}

export default Component;
