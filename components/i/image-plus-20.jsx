import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4qtxib2o.css';
import '../../css/w/w1mbzmb-x.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4qtxib2o"/><path class="w1mbzmb-x"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:image-plus-20",
	});
}

export default Component;
