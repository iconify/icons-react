import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrwx2vbbl.css';
import '../../css/n/na2wn5bjc.css';
import '../../css/a/a0rbz25oc.css';
import '../../css/o/o4upegzaw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrwx2vbbl"/><path class="na2wn5bjc"/><path class="a0rbz25oc"/><path class="o4upegzaw"/>`,
		"fallback": "energy-icons:concentrated-solar-20-bold",
	});
}

export default Component;
