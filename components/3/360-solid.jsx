import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axq885ryf.css';
import '../../css/f/fegcs2boz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axq885ryf"/><path clip-rule="evenodd" class="fegcs2boz"/>`,
		"fallback": "teenyicons:360-solid",
	});
}

export default Component;
