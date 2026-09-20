import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rzicbmbnz.css';
import '../../css/v/vkyp9sb1o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="rzicbmbnz"/><path class="vkyp9sb1o"/></g>`,
		"fallback": "streamline-color:graph",
	});
}

export default Component;
