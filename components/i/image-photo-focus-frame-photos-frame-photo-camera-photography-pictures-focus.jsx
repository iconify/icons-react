import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qb_gf6_yn.css';
import '../../css/r/r654km3re.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="qb_gf6_yn"/><path class="r654km3re"/></g>`,
		"fallback": "streamline:image-photo-focus-frame-photos-frame-photo-camera-photography-pictures-focus",
	});
}

export default Component;
