import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/i/icv9eokje.css';
import '../../css/o/o21it0b4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="icv9eokje"/><path class="o21it0b4f"/></g>`,
		"fallback": "streamline-color:graph-arrow-increase",
	});
}

export default Component;
