import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnuozhkls.css';
import '../../css/o/ob_wxib3i.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnuozhkls"/><path class="ob_wxib3i"/>`,
		"fallback": "tdesign:data-error-filled",
	});
}

export default Component;
