import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbh2wzl7b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rbh2wzl7b"/>`,
		"fallback": "teenyicons:arrow-right-circle-solid",
	});
}

export default Component;
