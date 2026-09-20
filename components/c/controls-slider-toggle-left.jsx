import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpzz9abup.css';
import '../../css/z/znd-kf3wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpzz9abup"/><path class="znd-kf3wq"/>`,
		"fallback": "streamline-freehand:controls-slider-toggle-left",
	});
}

export default Component;
