import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axu82-ogq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axu82-ogq"/>`,
		"fallback": "noviair:git-branch-refresh",
	});
}

export default Component;
