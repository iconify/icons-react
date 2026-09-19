import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ronlp2bmc.css';
import '../../css/y/y7t-hgd4w.css';
import '../../css/g/gg7do9b6v.css';
import '../../css/d/ddhm3rbqu.css';
import '../../css/n/n-bl3t6gv.css';
import '../../css/b/bb9mbubeu.css';
import '../../css/k/kfaykc6be.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ronlp2bmc"/><circle class="y7t-hgd4w"/><circle class="gg7do9b6v"/><circle class="ddhm3rbqu"/><circle class="n-bl3t6gv"/><path class="bb9mbubeu"/><path class="kfaykc6be"/>`,
		"fallback": "carbon:hail",
	});
}

export default Component;
