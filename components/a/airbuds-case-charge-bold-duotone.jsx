import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnmrc62nm.css';
import '../../css/z/zy_e48yuc.css';
import '../../css/c/c5psv0bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnmrc62nm"/><path class="zy_e48yuc"/><path class="c5psv0bwx"/>`,
		"fallback": "solar:airbuds-case-charge-bold-duotone",
	});
}

export default Component;
