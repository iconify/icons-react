import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tkw1zoffe.css';
import '../../css/r/rnp50yozo.css';
import '../../css/u/u6d1zuhgm.css';
import '../../css/z/zt8n7mbzz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="tkw1zoffe"/><path class="rnp50yozo"/><path class="u6d1zuhgm"/><path class="zt8n7mbzz"/></g>`,
		"fallback": "icon-park:icecream-five",
	});
}

export default Component;
