import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxwi8fcof.css';
import '../../css/x/xy9vhf6wf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxwi8fcof"/><path class="xy9vhf6wf"/>`,
		"fallback": "teenyicons:gift-solid",
	});
}

export default Component;
