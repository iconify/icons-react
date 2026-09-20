import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx3r8lbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx3r8lbcb"/>`,
		"fallback": "streamline-ultimate:computer-chip-core",
	});
}

export default Component;
