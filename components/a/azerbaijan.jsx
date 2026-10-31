import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2w6t3b0i.css';
import '../../css/f/fgh2fcbnj.css';
import '../../css/l/lzc4vcbfk.css';
import '../../css/p/p6h5u-bah.css';
import '../../css/p/pptz10bie.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2w6t3b0i"/><path class="fgh2fcbnj"/><path class="lzc4vcbfk"/><path class="p6h5u-bah"/><path class="pptz10bie"/>`,
		"fallback": "tabler-flags:azerbaijan",
	});
}

export default Component;
