import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/c/c0ypj1gea.css';
import '../../css/b/bsi8mlbws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="c0ypj1gea"/><path class="bsi8mlbws"/></g>`,
		"fallback": "streamline-plump-color:check-thick",
	});
}

export default Component;
