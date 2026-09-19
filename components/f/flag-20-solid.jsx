import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du0febchq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du0febchq"/>`,
		"fallback": "heroicons:flag-20-solid",
	});
}

export default Component;
