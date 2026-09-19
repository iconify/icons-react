import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/o/ogar2nbat.css';
import '../../css/r/rxmfttsiy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="ogar2nbat"/><circle class="rxmfttsiy"/></g>`,
		"fallback": "catppuccin:codeowners",
	});
}

export default Component;
