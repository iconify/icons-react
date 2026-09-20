import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nclm2o22a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nclm2o22a"/>`,
		"fallback": "memory:comment",
	});
}

export default Component;
