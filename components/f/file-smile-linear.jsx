import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/edm2av0vf.css';
import '../../css/z/zsa2kdbdw.css';
import '../../css/d/d76hi_bnp.css';
import '../../css/i/iumob5e9e.css';
import '../../css/z/z25lovqsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="edm2av0vf"/><path class="zsa2kdbdw"/><path class="d76hi_bnp"/><path class="iumob5e9e"/><path class="z25lovqsv"/></g>`,
		"fallback": "solar:file-smile-linear",
	});
}

export default Component;
