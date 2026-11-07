import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaom8wbxw.css';
import '../../css/o/ojeg-bwuu.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yaom8wbxw"/><path class="ojeg-bwuu"/><path clip-rule="evenodd" class="k_haes9zn"/>`,
		"fallback": "solar:high-quality-outline",
	});
}

export default Component;
