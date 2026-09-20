import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idz8dpb9m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="idz8dpb9m"/>`,
		"fallback": "teenyicons:appointments-solid",
	});
}

export default Component;
