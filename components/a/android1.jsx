import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syxlvzekp.css';
import '../../css/s/sq-atxafu.css';
import '../../css/x/xaagdbbhy.css';
import '../../css/g/g-sqo_w-s.css';
import '../../css/g/g00kaobwl.css';

const viewBox = {"width":54,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syxlvzekp"/><path class="sq-atxafu"/><path class="xaagdbbhy"/><path class="g-sqo_w-s"/><path class="g00kaobwl"/>`,
		"fallback": "flat-ui:android1",
	});
}

export default Component;
