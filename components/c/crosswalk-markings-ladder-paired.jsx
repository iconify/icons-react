import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_zv6gb8r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_zv6gb8r"/>`,
		"fallback": "pinhead:crosswalk-markings-ladder-paired",
	});
}

export default Component;
