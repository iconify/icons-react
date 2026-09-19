import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hanj1gb4h.css';
import '../../css/e/egoxdachk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hanj1gb4h"/><path class="egoxdachk"/>`,
		"fallback": "bx:bxs-washer",
	});
}

export default Component;
