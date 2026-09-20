import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg1-ktdwy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rg1-ktdwy"/>`,
		"fallback": "streamline-flex:end-point-diamond-remix",
	});
}

export default Component;
