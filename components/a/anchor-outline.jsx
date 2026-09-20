import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac2-8hbbw.css';
import '../../css/l/lmsrdu7eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ac2-8hbbw"/><path class="lmsrdu7eq"/><circle class="ac2-8hbbw"/>`,
		"fallback": "typcn:anchor-outline",
	});
}

export default Component;
