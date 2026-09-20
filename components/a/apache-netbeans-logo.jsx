import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/nk498jbjw.css';
import '../../css/d/dps7beoqy.css';
import '../../css/u/u7ofx7jsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="nk498jbjw"/><path class="dps7beoqy"/><path class="u7ofx7jsi"/></g>`,
		"fallback": "streamline-logos:apache-netbeans-logo",
	});
}

export default Component;
