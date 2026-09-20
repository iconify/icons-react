import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w3e42mbmi.css';
import '../../css/w/w0ndlmbhz.css';
import '../../css/q/qumgbghqq.css';
import '../../css/y/yvbrc32hp.css';
import '../../css/r/ra90swbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w3e42mbmi"/><path class="w0ndlmbhz"/><path class="qumgbghqq"/><path class="yvbrc32hp"/><path class="ra90swbab"/></g>`,
		"fallback": "streamline-freehand-color:customer-action-complaint",
	});
}

export default Component;
