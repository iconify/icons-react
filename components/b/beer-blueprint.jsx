import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvdwhob0j.css';
import '../../css/o/ovo6dzb9q.css';
import '../../css/s/sr_evqbow.css';
import '../../css/z/zqh0c1bua.css';
import '../../css/d/d4az0bcly.css';
import '../../css/w/wskt0zbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nvdwhob0j wm-deco"/><path class="ovo6dzb9q wm-deco"/><path class="sr_evqbow wm-deco"/><path class="wm-k zqh0c1bua"/><path class="d4az0bcly wm-a"/><path class="wm-k wskt0zbhn"/></g>`,
		"fallback": "withicons:beer-blueprint",
	});
}

export default Component;
