import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awxd4wb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awxd4wb0e"/>`,
		"fallback": "streamline-sharp:artificial-intelligence-brain-chip-remix",
	});
}

export default Component;
