import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1e4bpxgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1e4bpxgs"/>`,
		"fallback": "streamline-ultimate:fitness-jumping-rope",
	});
}

export default Component;
