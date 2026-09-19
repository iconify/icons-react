import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/b/btytjgehb.css';
import '../../css/x/xrhckqv-s.css';
import '../../css/m/myh4p8ksh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="btytjgehb"/><ellipse class="xrhckqv-s"/><path class="myh4p8ksh"/>`,
		"fallback": "catppuccin:folder-pesde-open",
	});
}

export default Component;
