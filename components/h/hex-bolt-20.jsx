import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef0ljnb5r.css';
import '../../css/y/yoszd_bap.css';
import '../../css/t/t_ft7pb_d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef0ljnb5r"/><path class="yoszd_bap"/><path class="t_ft7pb_d"/>`,
		"fallback": "energy-icons:hex-bolt-20",
	});
}

export default Component;
