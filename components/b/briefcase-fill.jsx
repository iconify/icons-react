import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxur0bc0h.css';
import '../../css/q/q114wtnjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxur0bc0h"/><path class="q114wtnjk"/>`,
		"fallback": "mage:briefcase-fill",
	});
}

export default Component;
