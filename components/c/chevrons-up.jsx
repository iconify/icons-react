import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv-0_9b5j.css';
import '../../css/t/t141ssbgj.css';
import '../../css/x/xgz4a685r.css';
import '../../css/u/umxz_5b4r.css';
import '../../css/k/kehzw2byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv-0_9b5j wm-shadow"/><path class="t141ssbgj wm-k"/><path class="wm-k xgz4a685r"/><path class="umxz_5b4r wm-a"/><path class="kehzw2byj wm-a"/>`,
		"fallback": "withicons-pastel:chevrons-up",
	});
}

export default Component;
