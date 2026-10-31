import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzds0la1g.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/j/j6_dfnhpm.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzds0la1g"/><path class="d1x_6zbkv"/><path class="j6_dfnhpm"/>`,
		"fallback": "tabler-flags:cabinda",
	});
}

export default Component;
