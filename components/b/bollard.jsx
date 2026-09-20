import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2ymx__o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf2ymx__o"/>`,
		"fallback": "pinhead:bollard",
	});
}

export default Component;
