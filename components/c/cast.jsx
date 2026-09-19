import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lud_oq9-e.css';
import '../../css/f/f3cbn2boa.css';
import '../../css/l/lzg97zbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lud_oq9-e"/><path class="f3cbn2boa"/><path class="lzg97zbby"/>`,
		"fallback": "boxicons:cast",
	});
}

export default Component;
