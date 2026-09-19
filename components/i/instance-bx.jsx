import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qckt124lo.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/f/ftm-s_hiy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qckt124lo"/><circle class="c8kuy_ape"/><path class="ftm-s_hiy"/>`,
		"fallback": "carbon:instance-bx",
	});
}

export default Component;
