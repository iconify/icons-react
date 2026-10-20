import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7zd1ybtr.css';
import '../../css/b/b3kw4gbdt.css';
import '../../css/l/lu7adg6gh.css';
import '../../css/i/i2brkwkni.css';
import '../../css/t/trhoxwbpk.css';
import '../../css/x/xrm7qqsdq.css';
import '../../css/u/ux02h_-5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d7zd1ybtr"/><path class="b3kw4gbdt"/><path class="lu7adg6gh"/><circle class="i2brkwkni"/><circle class="trhoxwbpk"/><circle class="xrm7qqsdq"/><circle class="ux02h_-5b"/></g>`,
		"fallback": "lucide:brain-circuit",
	});
}

export default Component;
