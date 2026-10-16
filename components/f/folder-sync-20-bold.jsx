import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt8f-3eoh.css';
import '../../css/i/i0ed3gb6r.css';
import '../../css/i/ilel_r_ca.css';
import '../../css/s/stu8q3lpz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt8f-3eoh"/><path class="i0ed3gb6r"/><path class="ilel_r_ca"/><path class="stu8q3lpz"/>`,
		"fallback": "energy-icons:folder-sync-20-bold",
	});
}

export default Component;
