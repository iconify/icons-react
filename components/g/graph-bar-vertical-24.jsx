import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9vvm_wmz.css';
import '../../css/z/zpxidp81t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9vvm_wmz"/><path class="zpxidp81t"/>`,
		"fallback": "octicon:graph-bar-vertical-24",
	});
}

export default Component;
