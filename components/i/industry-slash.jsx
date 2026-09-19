import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dby-twbls.css';
import '../../css/b/bg9dcj-ic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dby-twbls"/><path class="bg9dcj-ic"/>`,
		"fallback": "cil:industry-slash",
	});
}

export default Component;
