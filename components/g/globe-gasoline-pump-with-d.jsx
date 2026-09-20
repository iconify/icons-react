import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2qdo2_c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2qdo2_c"/>`,
		"fallback": "pinhead:globe-gasoline-pump-with-d",
	});
}

export default Component;
