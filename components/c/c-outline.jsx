import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wskhgyk4n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wskhgyk4n"/>`,
		"fallback": "teenyicons:c-outline",
	});
}

export default Component;
