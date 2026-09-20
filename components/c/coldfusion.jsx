import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rew-o_dyy.css';
import '../../css/u/ubz5-631s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rew-o_dyy"/><path class="ubz5-631s"/>`,
		"fallback": "material-icon-theme:coldfusion",
	});
}

export default Component;
