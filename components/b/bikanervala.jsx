import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo07ssopt.css';
import '../../css/l/l19u7itse.css';
import '../../css/p/p5xn_tbck.css';

const viewBox = {"width":1999.5,"height":691.5,"left":0.48,"top":4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo07ssopt"/><path class="l19u7itse"/><path class="p5xn_tbck"/>`,
		"fallback": "thesvg-color:bikanervala",
	});
}

export default Component;
