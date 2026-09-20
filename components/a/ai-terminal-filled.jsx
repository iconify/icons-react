import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_i17xbai.css';
import '../../css/l/llov8mbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_i17xbai"/><path class="llov8mbku"/>`,
		"fallback": "tdesign:ai-terminal-filled",
	});
}

export default Component;
