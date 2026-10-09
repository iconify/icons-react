import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilf28rb4r.css';
import '../../css/r/rilm8wbja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilf28rb4r"/><path class="rilm8wbja"/>`,
		"fallback": "energy-icons:flame-20",
	});
}

export default Component;
