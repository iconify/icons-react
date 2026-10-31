import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/ruo5fdb7x.css';
import '../../css/i/iusl08bai.css';
import '../../css/g/gcl_rzbbb.css';
import '../../css/c/cph2zc1da.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ruo5fdb7x"/><path class="iusl08bai wm-shine"/><path class="gcl_rzbbb wm-k"/><path class="cph2zc1da wm-a"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:eye-off",
	});
}

export default Component;
