import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pydxmub-s.css';
import '../../css/s/sru-zac9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pydxmub-s"/><path class="sru-zac9m"/>`,
		"fallback": "garden:history-fill-20",
	});
}

export default Component;
