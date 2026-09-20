import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fogjkc5eq.css';
import '../../css/z/zwaobpb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fogjkc5eq"/><path clip-rule="evenodd" class="zwaobpb-t"/>`,
		"fallback": "si:ai-monitor-fill",
	});
}

export default Component;
