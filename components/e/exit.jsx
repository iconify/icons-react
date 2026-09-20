import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obdbvh-1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obdbvh-1g"/>`,
		"fallback": "roentgen:exit",
	});
}

export default Component;
