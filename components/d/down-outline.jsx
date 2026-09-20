import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neqan3d7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neqan3d7m"/>`,
		"fallback": "lsicon:down-outline",
	});
}

export default Component;
