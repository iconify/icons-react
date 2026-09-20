import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/w/whymwmp8p.css';
import '../../css/s/sdqr8yk5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="whymwmp8p"/><path class="sdqr8yk5x"/></g>`,
		"fallback": "streamline-flex-color:bluetooth-disabled",
	});
}

export default Component;
