import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efajndx5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efajndx5a"/>`,
		"fallback": "at-icons:bird",
	});
}

export default Component;
