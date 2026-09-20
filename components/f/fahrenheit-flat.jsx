import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqd7wacsz.css';
import '../../css/g/g8buyebct.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zqd7wacsz"/><path class="g8buyebct"/></g>`,
		"fallback": "streamline-plump-color:fahrenheit-flat",
	});
}

export default Component;
