import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awfpctb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awfpctb3j"/>`,
		"fallback": "lets-icons:basket-alt-2-light",
	});
}

export default Component;
