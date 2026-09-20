import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z_pzoebco.css';
import '../../css/z/z6-zjdbdj.css';
import '../../css/v/vttjq2bxj.css';
import '../../css/k/kttk4i3px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z_pzoebco"/><path class="z6-zjdbdj"/><path class="vttjq2bxj"/><path class="kttk4i3px"/></g>`,
		"fallback": "streamline-ultimate-color:blood-drops-positive",
	});
}

export default Component;
