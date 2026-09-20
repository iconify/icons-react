import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u75u46mdv.css';
import '../../css/d/dxrkstvit.css';
import '../../css/o/o7dtbhb5q.css';
import '../../css/x/x6qmiebml.css';
import '../../css/z/z40gd5b4a.css';
import '../../css/g/gbv8j_h3p.css';
import '../../css/x/xek4tcsky.css';
import '../../css/c/c9tezxbjk.css';
import '../../css/y/yifn-mboe.css';
import '../../css/i/ixqah5btn.css';
import '../../css/e/e7l1drb0j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u75u46mdv"/><path class="dxrkstvit"/><path class="o7dtbhb5q"/><path class="x6qmiebml"/><path class="z40gd5b4a"/><path class="gbv8j_h3p"/><path class="xek4tcsky"/><circle class="c9tezxbjk"/><circle class="yifn-mboe"/><path class="ixqah5btn"/><path class="e7l1drb0j"/>`,
		"fallback": "openmoji:cook-light-skin-tone",
	});
}

export default Component;
