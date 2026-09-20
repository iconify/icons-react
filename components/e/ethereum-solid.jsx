import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le4i3-b9i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="le4i3-b9i"/>`,
		"fallback": "teenyicons:ethereum-solid",
	});
}

export default Component;
