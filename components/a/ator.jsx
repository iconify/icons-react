import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw2op4c-x.css';
import '../../css/o/ontf7ialn.css';
import '../../css/y/y8_pmfp-n.css';
import '../../css/f/fqns7tbpi.css';
import '../../css/f/fehi9oj7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pw2op4c-x"/><path class="ontf7ialn"/><path class="y8_pmfp-n"/><path class="fqns7tbpi"/><path class="fehi9oj7q"/>`,
		"fallback": "token:ator",
	});
}

export default Component;
