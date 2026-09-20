import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnaxwmm9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lnaxwmm9v"/>`,
		"fallback": "streamline-sharp:floppy-disk-remix",
	});
}

export default Component;
