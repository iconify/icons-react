import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-50ztbgo.css';
import '../../css/z/zof54ffpy.css';
import '../../css/i/ibk_3obac.css';
import '../../css/u/us_48ubxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-50ztbgo"/><path class="zof54ffpy"/><path class="ibk_3obac"/><path class="us_48ubxv"/>`,
		"fallback": "energy-icons:cold-storage-48-bold",
	});
}

export default Component;
