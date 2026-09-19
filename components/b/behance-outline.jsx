import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s86kprbuh.css';
import '../../css/r/rvt60jb_f.css';
import '../../css/o/odd3dzbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s86kprbuh"/><path clip-rule="evenodd" class="rvt60jb_f"/><path class="odd3dzbvb"/>`,
		"fallback": "basil:behance-outline",
	});
}

export default Component;
