import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn74v6bbn.css';
import '../../css/j/jjvt2sqaa.css';
import '../../css/c/cvu64vbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn74v6bbn"/><path class="jjvt2sqaa"/><path class="cvu64vbfn"/>`,
		"fallback": "stash:compass-duotone",
	});
}

export default Component;
