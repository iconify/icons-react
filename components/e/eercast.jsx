import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guzljmb-d.css';

const viewBox = {"width":1728,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guzljmb-d"/>`,
		"fallback": "fa:eercast",
	});
}

export default Component;
