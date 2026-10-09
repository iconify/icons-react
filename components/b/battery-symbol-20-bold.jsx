import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui968qbnt.css';
import '../../css/u/u-wijubjh.css';
import '../../css/b/bf8rmdbee.css';
import '../../css/k/kaxml2b1n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui968qbnt"/><path class="u-wijubjh"/><path class="bf8rmdbee"/><path class="kaxml2b1n"/>`,
		"fallback": "energy-icons:battery-symbol-20-bold",
	});
}

export default Component;
