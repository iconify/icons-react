import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6fk_ut1c.css';

const viewBox = {"width":432,"height":392};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6fk_ut1c"/>`,
		"fallback": "zmdi:favorite",
	});
}

export default Component;
