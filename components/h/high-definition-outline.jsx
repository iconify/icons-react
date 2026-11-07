import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrywqg59y.css';
import '../../css/d/da5zu8z9m.css';
import '../../css/k/k_haes9zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrywqg59y"/><path clip-rule="evenodd" class="da5zu8z9m"/><path clip-rule="evenodd" class="k_haes9zn"/>`,
		"fallback": "solar:high-definition-outline",
	});
}

export default Component;
