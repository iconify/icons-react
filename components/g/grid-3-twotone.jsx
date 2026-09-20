import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5x6ze.css';
import '../../css/z/zjye1e.css';
import '../../css/v/vkmsve.css';
import '../../css/k/k7jtot.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-12.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5x6ze zjye1e"/><path class="vkmsve w5x6ze"/><path class="k7jtot w5x6ze"/>`,
		"fallback": "line-md:grid-3-twotone",
	});
}

export default Component;
