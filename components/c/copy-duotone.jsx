import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbjam7ssf.css';
import '../../css/h/h-k00lbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbjam7ssf"/><path class="h-k00lbzy"/>`,
		"fallback": "stash:copy-duotone",
	});
}

export default Component;
