import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wilx9023w.css';
import '../../css/d/dn6s-ubtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wilx9023w"/><path class="dn6s-ubtl"/>`,
		"fallback": "octicon:dependabot-24",
	});
}

export default Component;
