import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1m_6d7ct.css';
import '../../css/u/uo96j3bcz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l1m_6d7ct"/><path class="clr-i-outline clr-i-outline-path-2 uo96j3bcz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:compass-line",
	});
}

export default Component;
