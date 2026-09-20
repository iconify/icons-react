import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze_a_hy1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze_a_hy1a"/>`,
		"fallback": "lucide:folder-closed",
	});
}

export default Component;
