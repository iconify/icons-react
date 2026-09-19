import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxotp5bvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxotp5bvu"/>`,
		"fallback": "icon-park-outline:fold-up-one",
	});
}

export default Component;
