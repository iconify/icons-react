import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmk6lwbpc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmk6lwbpc"/>`,
		"fallback": "codicon:group-by-ref-type",
	});
}

export default Component;
