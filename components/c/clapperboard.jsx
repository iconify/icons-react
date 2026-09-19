import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvowzcblg.css';
import '../../css/l/ljexf9bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer kvowzcblg"/><path class="duoicon-primary-layer ljexf9bnd"/>`,
		"fallback": "duo-icons:clapperboard",
	});
}

export default Component;
