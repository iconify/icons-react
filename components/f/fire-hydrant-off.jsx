import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkjt2n3sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkjt2n3sd"/>`,
		"fallback": "tabler:fire-hydrant-off",
	});
}

export default Component;
