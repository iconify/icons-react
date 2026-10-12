import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvj14fp0a.css';
import '../../css/m/m1vm8ebij.css';
import '../../css/v/vydbu88xu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvj14fp0a"/><path class="m1vm8ebij"/><path class="vydbu88xu"/>`,
		"fallback": "energy-icons:cloud-minus-20-bold",
	});
}

export default Component;
