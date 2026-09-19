import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_zctbc7m.css';
import '../../css/j/jw5g59skx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_zctbc7m"/><path class="jw5g59skx"/>`,
		"fallback": "eos-icons:critical-bug-outlined",
	});
}

export default Component;
