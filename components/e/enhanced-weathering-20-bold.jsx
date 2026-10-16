import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6aotmbvd.css';
import '../../css/w/wc6br1b7o.css';
import '../../css/v/v5azrzqtg.css';
import '../../css/b/bb1dkhbtn.css';
import '../../css/i/i4s3gsb4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6aotmbvd"/><path class="wc6br1b7o"/><path class="v5azrzqtg"/><path class="bb1dkhbtn"/><path class="i4s3gsb4k"/>`,
		"fallback": "energy-icons:enhanced-weathering-20-bold",
	});
}

export default Component;
