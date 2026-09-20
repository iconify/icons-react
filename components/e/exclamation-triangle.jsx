import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwzj-8bcw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwzj-8bcw"/>`,
		"fallback": "radix-icons:exclamation-triangle",
	});
}

export default Component;
