import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mkllvbb4k.css';
import '../../css/n/n0rztxpey.css';
import '../../css/c/c147i5g9x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="mkllvbb4k"/><path class="n0rztxpey"/></g><circle class="c147i5g9x"/>`,
		"fallback": "garden:image-stroke-12",
	});
}

export default Component;
