import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b039fzbwp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b039fzbwp"/>`,
		"fallback": "bi:at",
	});
}

export default Component;
