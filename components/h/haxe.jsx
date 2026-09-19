import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaiyq5bvp.css';
import '../../css/r/rdjuzybku.css';
import '../../css/z/zn1bxvb4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qaiyq5bvp"><path class="rdjuzybku"/><path class="zn1bxvb4h"/></g>`,
		"fallback": "catppuccin:haxe",
	});
}

export default Component;
