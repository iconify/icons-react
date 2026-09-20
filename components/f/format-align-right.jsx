import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cye1qenss.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cye1qenss"/>`,
		"fallback": "memory:format-align-right",
	});
}

export default Component;
