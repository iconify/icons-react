import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vparq1b6w.css';
import '../../css/p/pl47spb1r.css';
import '../../css/u/uzcz6f94u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vparq1b6w"/><path class="pl47spb1r"/><path class="uzcz6f94u"/>`,
		"fallback": "streamline-freehand:currency-bath-increase",
	});
}

export default Component;
