import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7nhbzsmz.css';
import '../../css/v/v3v551bqy.css';
import '../../css/j/j94t_ebkm.css';
import '../../css/x/xzxjqabgl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7nhbzsmz"/><path class="v3v551bqy"/><path class="j94t_ebkm"/><path class="xzxjqabgl"/>`,
		"fallback": "flat-ui:file",
	});
}

export default Component;
