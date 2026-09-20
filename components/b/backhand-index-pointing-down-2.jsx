import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymgdabjo.css';
import '../../css/z/zkcsodw7n.css';
import '../../css/a/aqbwc0b2o.css';
import '../../css/y/y1om2457k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymgdabjo"/><path class="zkcsodw7n"/><path class="aqbwc0b2o"/><path class="y1om2457k"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-down-2",
	});
}

export default Component;
