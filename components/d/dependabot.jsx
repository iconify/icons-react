import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg5zf7b3g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg5zf7b3g"/>`,
		"fallback": "devicon-plain:dependabot",
	});
}

export default Component;
