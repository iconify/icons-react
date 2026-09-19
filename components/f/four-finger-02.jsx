import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfxyw729p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfxyw729p"/>`,
		"fallback": "hugeicons:four-finger-02",
	});
}

export default Component;
