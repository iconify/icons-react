import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jmqlc0bwa.css';
import '../../css/z/zqfdxybuy.css';
import '../../css/c/c3kjldbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jmqlc0bwa"/><path class="zqfdxybuy"/><path class="c3kjldbpp"/></g>`,
		"fallback": "hugeicons:book-open-02",
	});
}

export default Component;
