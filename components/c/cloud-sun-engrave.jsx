import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lh4ximboh.css';
import '../../css/a/a5a7_neia.css';
import '../../css/z/za81krjzn.css';
import '../../css/x/xw85vjb7b.css';
import '../../css/r/rcz-smdjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lh4ximboh wm-k"/><path class="a5a7_neia wm-a"/><path class="wm-shadow za81krjzn"/><path class="wm-k xw85vjb7b"/><path class="rcz-smdjy wm-a"/></g>`,
		"fallback": "withicons:cloud-sun-engrave",
	});
}

export default Component;
