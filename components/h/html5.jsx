import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbjmc1hvx.css';
import '../../css/m/mu4g-lbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbjmc1hvx"/><path clip-rule="evenodd" class="mu4g-lbau"/>`,
		"fallback": "lineicons:html5",
	});
}

export default Component;
