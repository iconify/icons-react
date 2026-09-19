import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpb05ru6z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpb05ru6z"/>`,
		"fallback": "dinkie-icons:evergreen-tree",
	});
}

export default Component;
