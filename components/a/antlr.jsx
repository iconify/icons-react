import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynxabotvb.css';
import '../../css/n/nk5kckb1g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynxabotvb"/><path class="nk5kckb1g"/>`,
		"fallback": "devicon:antlr",
	});
}

export default Component;
