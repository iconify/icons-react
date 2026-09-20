import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_y8wh0z.css';
import '../../css/c/c485hsbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_y8wh0z"/><path class="c485hsbmk"/>`,
		"fallback": "octicon:diff-removed-24",
	});
}

export default Component;
