import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq_hm8yes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq_hm8yes"/>`,
		"fallback": "icon-park-outline:align-text-top",
	});
}

export default Component;
