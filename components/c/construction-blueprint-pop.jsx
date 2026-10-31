import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwl9zmixj.css';
import '../../css/p/p6yle9bpb.css';
import '../../css/v/vg4-crxmn.css';
import '../../css/i/iu_q9tb2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwl9zmixj"/><path class="p6yle9bpb"/><path class="vg4-crxmn"/><path class="iu_q9tb2j"/></g>`,
		"fallback": "streamline-kameleon-color:construction-blueprint-pop",
	});
}

export default Component;
