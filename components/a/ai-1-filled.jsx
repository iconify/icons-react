import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4xr0yhpn.css';
import '../../css/f/f2h708bjp.css';
import '../../css/c/c0k_mybxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4xr0yhpn"/><path class="f2h708bjp"/><path class="c0k_mybxg"/>`,
		"fallback": "tdesign:ai-1-filled",
	});
}

export default Component;
