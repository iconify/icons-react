import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-log0e6r.css';
import '../../css/e/e4me81bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-log0e6r"/><path clip-rule="evenodd" class="e4me81bwy"/>`,
		"fallback": "lineicons:globe-stand",
	});
}

export default Component;
