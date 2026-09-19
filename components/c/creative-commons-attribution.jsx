import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc5y2oeui.css';
import '../../css/g/g3xid1tzo.css';
import '../../css/i/i_60hekpa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc5y2oeui"/><circle class="g3xid1tzo"/><path clip-rule="evenodd" class="i_60hekpa"/>`,
		"fallback": "entypo:creative-commons-attribution",
	});
}

export default Component;
