import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oulhdmbyw.css';
import '../../css/i/iuiai5bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oulhdmbyw"/><path class="iuiai5bee"/>`,
		"fallback": "tdesign:git-commit-1-filled",
	});
}

export default Component;
