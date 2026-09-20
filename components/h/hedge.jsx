import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xap7szbno.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xap7szbno"/>`,
		"fallback": "temaki:hedge",
	});
}

export default Component;
