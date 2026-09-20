import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmwsuuafu.css';
import '../../css/i/idioxzbvi.css';
import '../../css/r/rqxdjtb9e.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBcAkBbbn"><g class="ft5dv1b6b"><path class="gmwsuuafu"/><path class="idioxzbvi"/><path class="rqxdjtb9e"/></g></mask></defs><path mask="url(#SVGBcAkBbbn)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:compass-north-duotone",
	});
}

export default Component;
