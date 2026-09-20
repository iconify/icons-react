import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr3ricc3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr3ricc3s"/>`,
		"fallback": "ri:file-list-2-line",
	});
}

export default Component;
