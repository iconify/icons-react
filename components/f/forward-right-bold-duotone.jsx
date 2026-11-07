import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i09z172-a.css';
import '../../css/v/v_3ka80pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i09z172-a"/><path class="v_3ka80pa"/>`,
		"fallback": "solar:forward-right-bold-duotone",
	});
}

export default Component;
