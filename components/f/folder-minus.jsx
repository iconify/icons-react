import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmmy2rb5f.css';
import '../../css/r/r-45tw1ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmmy2rb5f"/><path class="r-45tw1ar"/>`,
		"fallback": "boxicons:folder-minus",
	});
}

export default Component;
