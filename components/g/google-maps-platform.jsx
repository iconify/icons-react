import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjazihb8a.css';
import '../../css/b/bebqe1bxz.css';
import '../../css/u/ubukluesx.css';
import '../../css/u/u8jp0itvb.css';
import '../../css/q/qwrx_blcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjazihb8a"/><path class="bebqe1bxz"/><path class="ubukluesx"/><path class="u8jp0itvb"/><path class="qwrx_blcb"/>`,
		"fallback": "gcp:google-maps-platform",
	});
}

export default Component;
