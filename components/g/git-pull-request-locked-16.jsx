import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsay_9bjz.css';
import '../../css/e/e56ncghit.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsay_9bjz"/><path class="e56ncghit"/>`,
		"fallback": "octicon:git-pull-request-locked-16",
	});
}

export default Component;
