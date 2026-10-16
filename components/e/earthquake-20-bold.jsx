import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gclpr8i1a.css';
import '../../css/r/royu2xbzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gclpr8i1a"/><path class="royu2xbzr"/>`,
		"fallback": "energy-icons:earthquake-20-bold",
	});
}

export default Component;
