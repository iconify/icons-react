import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4zsyabzx.css';
import '../../css/a/alear2y7j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4zsyabzx"/><path class="alear2y7j"/>`,
		"fallback": "famicons:business-sharp",
	});
}

export default Component;
