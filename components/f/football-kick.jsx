import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuxwwovsb.css';
import '../../css/b/b6hnulsaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuxwwovsb"/><path class="b6hnulsaa"/>`,
		"fallback": "boxicons:football-kick",
	});
}

export default Component;
