import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fria-632b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fria-632b"/>`,
		"fallback": "gg:git-pull",
	});
}

export default Component;
