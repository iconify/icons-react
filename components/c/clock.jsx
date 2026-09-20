import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efr-ryaff.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efr-ryaff"/>`,
		"fallback": "temaki:clock",
	});
}

export default Component;
