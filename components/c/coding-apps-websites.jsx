import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7-h77blv.css';
import '../../css/s/spvv0ubfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7-h77blv"/><path class="spvv0ubfq"/>`,
		"fallback": "streamline-pixel:coding-apps-websites",
	});
}

export default Component;
