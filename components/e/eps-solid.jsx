import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gztvgb2-v.css';
import '../../css/x/xqf3i9bis.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gztvgb2-v"/><path clip-rule="evenodd" class="xqf3i9bis"/>`,
		"fallback": "teenyicons:eps-solid",
	});
}

export default Component;
