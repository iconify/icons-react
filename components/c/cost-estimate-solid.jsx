import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pns5a3bor.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pns5a3bor"/>`,
		"fallback": "teenyicons:cost-estimate-solid",
	});
}

export default Component;
