import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arxe123jq.css';
import '../../css/t/tjw051bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arxe123jq"/><path clip-rule="evenodd" class="tjw051bld"/>`,
		"fallback": "lineicons:cloud-check-circle",
	});
}

export default Component;
