import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foufpwbhx.css';
import '../../css/i/itcwtlbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="foufpwbhx"/><path class="itcwtlbql"/>`,
		"fallback": "lets-icons:download-light",
	});
}

export default Component;
