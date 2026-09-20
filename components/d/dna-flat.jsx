import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9bd0dbhp.css';
import '../../css/s/s3i7xdp2x.css';
import '../../css/r/rcpiwk_jb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9bd0dbhp"/><path clip-rule="evenodd" class="s3i7xdp2x"/><path clip-rule="evenodd" class="rcpiwk_jb"/></g>`,
		"fallback": "streamline-plump-color:dna-flat",
	});
}

export default Component;
