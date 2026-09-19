import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqj6aujyf.css';
import '../../css/n/n0guy7nbp.css';
import '../../css/b/b-7bc9b_n.css';
import '../../css/l/l1xsbgjra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sqj6aujyf"/><path class="n0guy7nbp"/><path class="b-7bc9b_n"/><path class="l1xsbgjra"/>`,
		"fallback": "carbon:drop-photo-filled",
	});
}

export default Component;
