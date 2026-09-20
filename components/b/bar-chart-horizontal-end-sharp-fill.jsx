import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9uem0hua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9uem0hua"/>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end-sharp-fill",
	});
}

export default Component;
