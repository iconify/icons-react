import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lka0l_80a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lka0l_80a"/>`,
		"fallback": "mingcute:git-branch-2-line",
	});
}

export default Component;
