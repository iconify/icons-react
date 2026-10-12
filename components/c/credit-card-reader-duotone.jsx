import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3ks6kk1v.css';
import '../../css/k/k09hkxgwo.css';
import '../../css/a/asyru8bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3ks6kk1v"/><path class="k09hkxgwo"/><path class="asyru8bos"/></g>`,
		"fallback": "lucide-extended:credit-card-reader-duotone",
	});
}

export default Component;
