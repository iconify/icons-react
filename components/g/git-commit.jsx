import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vyj6x83we.css';
import '../../css/z/zlgem4bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vyj6x83we"/><path class="zlgem4bip"/></g>`,
		"fallback": "tdesign:git-commit",
	});
}

export default Component;
