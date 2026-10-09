import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyr9-qb4r.css';
import '../../css/f/fcdrigb7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyr9-qb4r"/><path class="fcdrigb7l"/>`,
		"fallback": "energy-icons:crucible-20",
	});
}

export default Component;
