import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyfj73g9f.css';
import '../../css/v/vkc1wcb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyfj73g9f"/><path class="vkc1wcb9m"/>`,
		"fallback": "thesvg-color:infinigence",
	});
}

export default Component;
