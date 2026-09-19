import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ros9nur.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/x/xt_a157cz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6ros9nur"/><circle class="c8kuy_ape"/><path class="xt_a157cz"/>`,
		"fallback": "carbon:instance-classic",
	});
}

export default Component;
