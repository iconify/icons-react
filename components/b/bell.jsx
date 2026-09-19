import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r93raabqp.css';
import '../../css/a/a9zfb2_0j.css';
import '../../css/e/ed247db-o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r93raabqp"/><path class="a9zfb2_0j"/><path class="ed247db-o"/>`,
		"fallback": "ep:bell",
	});
}

export default Component;
