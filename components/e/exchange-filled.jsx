import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5_b2ukoj.css';
import '../../css/i/i2im_ubvg.css';
import '../../css/z/znj8j9blt.css';
import '../../css/a/ajshiibhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5_b2ukoj"/><path clip-rule="evenodd" class="i2im_ubvg"/><path class="znj8j9blt"/><path clip-rule="evenodd" class="ajshiibhv"/>`,
		"fallback": "bitcoin-icons:exchange-filled",
	});
}

export default Component;
