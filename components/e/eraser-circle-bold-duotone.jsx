import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdvcwidb.css';
import '../../css/v/vsmrr13db.css';
import '../../css/c/ch40nbb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdvcwidb"/><path class="vsmrr13db"/><path class="ch40nbb6b"/>`,
		"fallback": "solar:eraser-circle-bold-duotone",
	});
}

export default Component;
