import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za7cltxdg.css';
import '../../css/v/v_my3mlnv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za7cltxdg"/><path class="v_my3mlnv"/>`,
		"fallback": "fxemoji:banknoteeuro",
	});
}

export default Component;
