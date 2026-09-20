import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/j/jw31yachr.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="jw31yachr"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-sharp-two-tone",
	});
}

export default Component;
