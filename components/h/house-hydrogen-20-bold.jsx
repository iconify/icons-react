import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gro8lebrz.css';
import '../../css/k/kifto8buo.css';
import '../../css/g/geksxacrs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gro8lebrz"/><path class="kifto8buo"/><path class="geksxacrs"/>`,
		"fallback": "energy-icons:house-hydrogen-20-bold",
	});
}

export default Component;
