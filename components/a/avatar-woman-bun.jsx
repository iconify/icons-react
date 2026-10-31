import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hgcxjebbo.css';
import '../../css/k/k_yzbeqck.css';
import '../../css/t/tni-dhcwu.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hgcxjebbo"/><path class="k_yzbeqck"/><path class="tni-dhcwu wm-shine"/><path class="o9wp5rbfh wm-k"/><path class="msfwckeky wm-a"/></g>`,
		"fallback": "withicons-kawaii:avatar-woman-bun",
	});
}

export default Component;
