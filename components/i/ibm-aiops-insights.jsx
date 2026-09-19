import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq-zceb_w.css';
import '../../css/r/rhd8cdczy.css';
import '../../css/w/wuev9cbck.css';
import '../../css/g/gjeb820rg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq-zceb_w"/><path class="rhd8cdczy"/><path class="wuev9cbck"/><circle class="gjeb820rg"/>`,
		"fallback": "carbon:ibm-aiops-insights",
	});
}

export default Component;
