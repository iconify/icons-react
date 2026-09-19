import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnq2q5bnu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnq2q5bnu"/>`,
		"fallback": "dashicons:ellipsis",
	});
}

export default Component;
