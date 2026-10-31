import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tn_3d9b0b.css';
import '../../css/c/cwhbfnber.css';
import '../../css/g/ghycr5fzr.css';
import '../../css/n/naeb0abdw.css';
import '../../css/c/clf7bkh7f.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="tn_3d9b0b"/><path class="cwhbfnber"/><path class="ghycr5fzr wm-shine"/><path class="naeb0abdw wm-k"/><path class="clf7bkh7f wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons-kawaii:image-off",
	});
}

export default Component;
