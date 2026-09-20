import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejek3_b1p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejek3_b1p"/>`,
		"fallback": "pinhead:bicycle-under-list-beside-checkmark",
	});
}

export default Component;
