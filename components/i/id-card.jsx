import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz9-9zbsk.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz9-9zbsk"/>`,
		"fallback": "fa6-solid:id-card",
	});
}

export default Component;
