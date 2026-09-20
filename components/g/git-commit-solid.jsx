import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnopl_b5h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnopl_b5h"/>`,
		"fallback": "teenyicons:git-commit-solid",
	});
}

export default Component;
