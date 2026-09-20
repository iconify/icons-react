import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixetddbeg.css';
import '../../css/u/ud9xiabyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixetddbeg"/><path class="ud9xiabyo"/>`,
		"fallback": "material-icon-theme:folder-serverless-open",
	});
}

export default Component;
