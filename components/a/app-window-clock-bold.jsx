import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty1e_gbpu.css';
import '../../css/a/aljx-nbqm.css';
import '../../css/i/iluxvyfjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty1e_gbpu"/><path class="aljx-nbqm"/><path class="iluxvyfjm"/>`,
		"fallback": "streamline-ultimate:app-window-clock-bold",
	});
}

export default Component;
