import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhe70kwmw.css';
import '../../css/f/f-6nxexvx.css';
import '../../css/w/wwemd7z7m.css';
import '../../css/w/wa4t1cfmf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="bhe70kwmw"/><path class="f-6nxexvx"/><path class="wwemd7z7m"/><path class="wa4t1cfmf"/>`,
		"fallback": "openmoji:authority",
	});
}

export default Component;
