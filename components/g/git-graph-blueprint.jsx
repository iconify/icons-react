import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hltawnn4f.css';
import '../../css/k/kzv9qkbxl.css';
import '../../css/t/t218te2ox.css';
import '../../css/g/gk_fs1s3s.css';
import '../../css/f/fhmv5bbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hltawnn4f wm-deco"/><path class="kzv9qkbxl wm-deco"/><path class="t218te2ox wm-deco"/><path class="gk_fs1s3s wm-k"/><path class="fhmv5bbjb wm-a"/></g>`,
		"fallback": "withicons:git-graph-blueprint",
	});
}

export default Component;
