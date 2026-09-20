import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hqygwwb5d.css';
import '../../css/v/vnjruvbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hqygwwb5d"/><path class="vnjruvbnt"/></g>`,
		"fallback": "keyline-icons:battery-sharp-two-tone",
	});
}

export default Component;
