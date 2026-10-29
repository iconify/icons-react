import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy2lufbjs.css';
import '../../css/p/psqa162mc.css';
import '../../css/i/ipeafrb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy2lufbjs wm-k"/><path class="psqa162mc wm-a"/><path class="ipeafrb_f wm-a"/>`,
		"fallback": "withicons-bauhaus:banknote",
	});
}

export default Component;
