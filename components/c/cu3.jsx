import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ze_xbnd.css';
import '../../css/o/o-ow-2npg.css';
import '../../css/h/hw5whrlil.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ze_xbnd"/><path class="o-ow-2npg"/><path class="hw5whrlil"/>`,
		"fallback": "carbon:cu3",
	});
}

export default Component;
