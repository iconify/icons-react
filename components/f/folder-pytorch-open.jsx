import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4bb7ybtz.css';
import '../../css/x/xns9x_bfv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4bb7ybtz"/><path class="xns9x_bfv"/>`,
		"fallback": "material-icon-theme:folder-pytorch-open",
	});
}

export default Component;
