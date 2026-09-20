import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi54hxxmw.css';
import '../../css/b/bhrfrhgpt.css';
import '../../css/y/yt5cbpk3k.css';
import '../../css/z/zbsr2m3nh.css';
import '../../css/z/z04drlb1l.css';
import '../../css/k/k452fh5mg.css';
import '../../css/g/gyr7pnrgo.css';
import '../../css/r/r061eunfs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi54hxxmw"/><path class="bhrfrhgpt"/><path class="yt5cbpk3k"/><path class="zbsr2m3nh"/><g class="z04drlb1l"><path class="k452fh5mg"/><path class="gyr7pnrgo"/><path class="r061eunfs"/></g>`,
		"fallback": "openmoji:foggy-mountain",
	});
}

export default Component;
