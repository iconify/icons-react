import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnep0m7rs.css';
import '../../css/z/zar1cn4so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnep0m7rs"/><path class="zar1cn4so"/>`,
		"fallback": "boxicons:arrow-in-up-left-circle",
	});
}

export default Component;
