import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe4b7xbxm.css';
import '../../css/n/ncwehzbfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe4b7xbxm"/><path class="ncwehzbfp"/>`,
		"fallback": "ion:fish-sharp",
	});
}

export default Component;
