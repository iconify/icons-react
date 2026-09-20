import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8hmranmg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8hmranmg"/>`,
		"fallback": "memory:box-light-horizontal-circle",
	});
}

export default Component;
