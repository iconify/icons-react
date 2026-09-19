import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvx48eb9e.css';
import '../../css/u/ubqbmcbip.css';
import '../../css/t/tt_v-sdqp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvx48eb9e"/><path class="ubqbmcbip"/><path class="tt_v-sdqp"/>`,
		"fallback": "carbon:feedback-documentation",
	});
}

export default Component;
