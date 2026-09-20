import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nst9stbrp.css';
import '../../css/v/v4u195i1r.css';
import '../../css/j/j646bpqop.css';
import '../../css/l/lz8purbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nst9stbrp"/><path class="v4u195i1r"/><path class="j646bpqop"/><path class="lz8purbdg"/>`,
		"fallback": "token:ete",
	});
}

export default Component;
