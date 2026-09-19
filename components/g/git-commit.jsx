import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9ypbl0sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9ypbl0sy"/>`,
		"fallback": "gg:git-commit",
	});
}

export default Component;
