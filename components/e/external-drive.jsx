import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8vms3b0m.css';
import '../../css/b/b5xb-mgxl.css';
import '../../css/u/u7wt_xx-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k8vms3b0m"/><path class="b5xb-mgxl"/><path class="u7wt_xx-f"/></g>`,
		"fallback": "hugeicons:external-drive",
	});
}

export default Component;
