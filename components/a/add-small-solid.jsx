import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evfk3vb_m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evfk3vb_m"/>`,
		"fallback": "teenyicons:add-small-solid",
	});
}

export default Component;
