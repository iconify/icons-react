import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-mbohzae.css';
import '../../css/n/nwge02l1w.css';
import '../../css/j/jcc0dqbjn.css';
import '../../css/j/jso3jy2en.css';
import '../../css/l/l-j_e7brz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-mbohzae"/><path class="nwge02l1w"/><path class="jcc0dqbjn"/><path class="jso3jy2en"/><path class="l-j_e7brz"/>`,
		"fallback": "ant-design:file-pdf-twotone",
	});
}

export default Component;
