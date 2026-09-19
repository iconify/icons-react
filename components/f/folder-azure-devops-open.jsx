import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/v/vc4wxe89z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="vc4wxe89z"/>`,
		"fallback": "catppuccin:folder-azure-devops-open",
	});
}

export default Component;
