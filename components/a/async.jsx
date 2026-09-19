import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvradzqdb.css';
import '../../css/y/yvl9v5b9e.css';
import '../../css/p/psjdr85ae.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvradzqdb"/><path class="yvl9v5b9e"/><path class="psjdr85ae"/>`,
		"fallback": "carbon:async",
	});
}

export default Component;
