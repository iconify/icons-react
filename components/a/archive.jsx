import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aev0f0bxv.css';
import '../../css/b/b-yzc2u7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aev0f0bxv"/><path class="b-yzc2u7t"/>`,
		"fallback": "nimbus:archive",
	});
}

export default Component;
