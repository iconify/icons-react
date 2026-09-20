import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw6plybjx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jw6plybjx"/>`,
		"fallback": "teenyicons:exclamation-circle-solid",
	});
}

export default Component;
