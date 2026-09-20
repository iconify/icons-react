import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m46eym3cb.css';
import '../../css/i/i-yovpx2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m46eym3cb"/><path class="i-yovpx2o"/>`,
		"fallback": "octicon:diff-renamed-24",
	});
}

export default Component;
