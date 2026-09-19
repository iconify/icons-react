import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckj-49bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckj-49bam"/>`,
		"fallback": "hugeicons:code-simple",
	});
}

export default Component;
