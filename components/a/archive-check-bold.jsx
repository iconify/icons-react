import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl1511bqd.css';
import '../../css/s/s6dl6st5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl1511bqd"/><path class="s6dl6st5p"/>`,
		"fallback": "solar:archive-check-bold",
	});
}

export default Component;
