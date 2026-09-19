import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxv_pcivz.css';
import '../../css/c/clqjdubcg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxv_pcivz"/><path class="clqjdubcg"/>`,
		"fallback": "carbon:direct-link",
	});
}

export default Component;
