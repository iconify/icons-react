import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi3-pkb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi3-pkb_c"/>`,
		"fallback": "thesvg-color:esphome",
	});
}

export default Component;
