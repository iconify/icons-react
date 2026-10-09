import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvtb9mbah.css';
import '../../css/n/ndrbb8byy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvtb9mbah"/><path class="ndrbb8byy"/>`,
		"fallback": "energy-icons:dollar-48",
	});
}

export default Component;
