import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7up3n3tb.css';
import '../../css/i/i_m0zzb6g.css';
import '../../css/g/gg96zrr7d.css';
import '../../css/r/rbr9__bgb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7up3n3tb"/><path class="i_m0zzb6g"/><path class="gg96zrr7d"/><path class="rbr9__bgb"/>`,
		"fallback": "energy-icons:carbon-storage-20-bold",
	});
}

export default Component;
