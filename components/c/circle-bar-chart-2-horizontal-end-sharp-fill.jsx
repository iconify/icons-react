import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzjf2zbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zzjf2zbey"/>`,
		"fallback": "keyline-icons:circle-bar-chart-2-horizontal-end-sharp-fill",
	});
}

export default Component;
