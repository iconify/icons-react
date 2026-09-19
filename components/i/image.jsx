import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cmwo62a.css';
import '../../css/s/si1_fnblv.css';
import '../../css/h/hxfqr2z6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v9cmwo62a"/><path class="si1_fnblv"/><path class="hxfqr2z6d"/>`,
		"fallback": "bx:image",
	});
}

export default Component;
