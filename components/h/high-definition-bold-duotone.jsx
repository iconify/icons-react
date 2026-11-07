import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/n/n74totb4p.css';
import '../../css/c/cdl9xjyfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="n74totb4p"/><path clip-rule="evenodd" class="cdl9xjyfu"/>`,
		"fallback": "solar:high-definition-bold-duotone",
	});
}

export default Component;
