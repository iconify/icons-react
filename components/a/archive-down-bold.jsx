import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-fdvb-j.css';
import '../../css/s/s6dl6st5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-fdvb-j"/><path class="s6dl6st5p"/>`,
		"fallback": "solar:archive-down-bold",
	});
}

export default Component;
