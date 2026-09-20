import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prl8l2bvy.css';
import '../../css/p/ptfrs5bkc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prl8l2bvy"/><path class="ptfrs5bkc"/>`,
		"fallback": "material-icon-theme:folder-trigger-open",
	});
}

export default Component;
