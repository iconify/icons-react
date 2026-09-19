import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0bv7wbdk.css';
import '../../css/g/g2_5sshgx.css';
import '../../css/j/j1xfmgbrg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n0bv7wbdk"><path class="g2_5sshgx"/><circle class="j1xfmgbrg"/></g>`,
		"fallback": "catppuccin:dub",
	});
}

export default Component;
