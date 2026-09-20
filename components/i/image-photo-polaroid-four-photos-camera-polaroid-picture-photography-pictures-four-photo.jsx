import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jivivrbni.css';
import '../../css/y/yes1-1b6c.css';
import '../../css/f/f-bh_mprb.css';
import '../../css/c/c07q9b5pt.css';
import '../../css/r/r7n2ctbvd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="jivivrbni"/><rect class="yes1-1b6c"/><rect class="f-bh_mprb"/><rect class="c07q9b5pt"/><path class="r7n2ctbvd"/></g>`,
		"fallback": "streamline:image-photo-polaroid-four-photos-camera-polaroid-picture-photography-pictures-four-photo",
	});
}

export default Component;
