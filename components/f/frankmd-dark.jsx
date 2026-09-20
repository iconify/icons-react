import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snaubdbur.css';
import '../../css/z/zh_kfpbbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snaubdbur"/><path class="zh_kfpbbn"/>`,
		"fallback": "selfhst:frankmd-dark",
	});
}

export default Component;
