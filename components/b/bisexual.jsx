import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vymljlban.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/z/z4_ceb6qa.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vymljlban"/><path class="xsmx0tbhg"/><path class="z4_ceb6qa"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:bisexual",
	});
}

export default Component;
