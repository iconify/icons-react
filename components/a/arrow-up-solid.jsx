import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwmt_xb_a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwmt_xb_a"/>`,
		"fallback": "teenyicons:arrow-up-solid",
	});
}

export default Component;
