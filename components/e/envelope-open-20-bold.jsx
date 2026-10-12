import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/silr-gb_u.css';
import '../../css/t/tdqcdzb3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="silr-gb_u"/><path class="tdqcdzb3d"/>`,
		"fallback": "energy-icons:envelope-open-20-bold",
	});
}

export default Component;
