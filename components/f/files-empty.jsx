import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq_lh9b1r.css';
import '../../css/z/z2r6h84kl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq_lh9b1r"/><path class="z2r6h84kl"/>`,
		"fallback": "icomoon-free:files-empty",
	});
}

export default Component;
