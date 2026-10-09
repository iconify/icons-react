import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0r96rbpr.css';
import '../../css/l/lssnpc1hw.css';
import '../../css/s/svq-tkbgt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0r96rbpr"/><path class="lssnpc1hw"/><path class="svq-tkbgt"/>`,
		"fallback": "energy-icons:biodiversity-20",
	});
}

export default Component;
