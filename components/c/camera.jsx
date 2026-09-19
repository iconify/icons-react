import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv0mj9bsl.css';
import '../../css/x/xbmduob_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cv0mj9bsl"/><path class="xbmduob_b"/>`,
		"fallback": "ion:camera",
	});
}

export default Component;
