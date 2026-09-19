import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zavhcvy1d.css';
import '../../css/l/lwsmj8vpm.css';

const viewBox = {"width":35,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zavhcvy1d"/><path class="lwsmj8vpm"/>`,
		"fallback": "fontisto:ambulance",
	});
}

export default Component;
