import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/u/uwzflgb2f.css';
import '../../css/x/xyha35u6p.css';
import '../../css/b/bl51xwbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="uwzflgb2f"/><path class="xyha35u6p"/><path class="bl51xwbqw"/>`,
		"fallback": "solar:chat-square-2-bold-duotone",
	});
}

export default Component;
