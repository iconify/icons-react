import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waz_2hbmd.css';
import '../../css/e/eyzw0tyws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waz_2hbmd"/><path class="eyzw0tyws"/>`,
		"fallback": "energy-icons:grass-20",
	});
}

export default Component;
