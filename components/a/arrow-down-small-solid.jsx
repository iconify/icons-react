import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtl2yqw5n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qtl2yqw5n"/>`,
		"fallback": "teenyicons:arrow-down-small-solid",
	});
}

export default Component;
