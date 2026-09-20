import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt_08xbdc.css';
import '../../css/e/e1l_1_bbr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt_08xbdc"/><path class="e1l_1_bbr"/>`,
		"fallback": "material-icon-theme:gemfile",
	});
}

export default Component;
