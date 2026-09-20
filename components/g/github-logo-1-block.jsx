import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr-3rds0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dr-3rds0j"/>`,
		"fallback": "streamline-logos:github-logo-1-block",
	});
}

export default Component;
