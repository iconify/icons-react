import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg1szrr6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dg1szrr6a"/>`,
		"fallback": "streamline-plump:file-report-remix",
	});
}

export default Component;
