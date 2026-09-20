import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0usn5b3x.css';
import '../../css/r/r36ju6ckj.css';
import '../../css/z/zf0_a8yec.css';
import '../../css/e/eswxi_jtw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0usn5b3x"/><path class="r36ju6ckj"/><path class="zf0_a8yec"/><path class="eswxi_jtw"/>`,
		"fallback": "selfhst:dosvault-light",
	});
}

export default Component;
