import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0vz-tbdb.css';
import '../../css/h/h5q9tn6hy.css';
import '../../css/r/riktqubqo.css';
import '../../css/z/zrbvzsbqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0vz-tbdb"/><path class="h5q9tn6hy"/><path class="riktqubqo"/><path class="zrbvzsbqf"/>`,
		"fallback": "fxemoji:bear",
	});
}

export default Component;
