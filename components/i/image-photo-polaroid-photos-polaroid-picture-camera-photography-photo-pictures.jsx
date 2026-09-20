import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zizvrx3_l.css';
import '../../css/t/tmbh0_bbb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 5 5)" class="zizvrx3_l"/><path class="tmbh0_bbb"/></g>`,
		"fallback": "streamline:image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures",
	});
}

export default Component;
