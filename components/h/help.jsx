import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/t/tqx3zex3e.css';
import '../../css/b/bc70y0nuy.css';
import '../../css/e/eit5ss6qe.css';
import '../../css/o/o6ye15b2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="tqx3zex3e"/><circle class="bc70y0nuy"/><circle class="eit5ss6qe"/><circle class="o6ye15b2w"/>`,
		"fallback": "formkit:help",
	});
}

export default Component;
