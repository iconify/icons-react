import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3-5_c46r.css';
import '../../css/z/z3gsuri1a.css';
import '../../css/w/wqsp95-af.css';
import '../../css/i/ictzck4fu.css';
import '../../css/k/kfkgtizuw.css';
import '../../css/u/uy5am3boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3-5_c46r"/><path class="z3gsuri1a"/><path class="wqsp95-af"/><path class="ictzck4fu"/><path class="kfkgtizuw"/><path class="uy5am3boz"/>`,
		"fallback": "token:extra",
	});
}

export default Component;
