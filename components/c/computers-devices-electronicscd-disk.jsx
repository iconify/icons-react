import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1q2rmeog.css';
import '../../css/g/g-u_mybju.css';
import '../../css/q/qs94uiuvh.css';
import '../../css/w/wqkclfbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1q2rmeog"/><path class="g-u_mybju"/><path class="qs94uiuvh"/><path class="wqkclfbxl"/>`,
		"fallback": "streamline-pixel:computers-devices-electronicscd-disk",
	});
}

export default Component;
