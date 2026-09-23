import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx-4ybcmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx-4ybcmu"/>`,
		"fallback": "tabler:git-merge-queue",
	});
}

export default Component;
