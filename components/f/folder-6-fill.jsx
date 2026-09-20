import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o38tsc_lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o38tsc_lv"/>`,
		"fallback": "ri:folder-6-fill",
	});
}

export default Component;
