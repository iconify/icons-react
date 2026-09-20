import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk9ls1b5w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kk9ls1b5w"/>`,
		"fallback": "teenyicons:c-solid",
	});
}

export default Component;
