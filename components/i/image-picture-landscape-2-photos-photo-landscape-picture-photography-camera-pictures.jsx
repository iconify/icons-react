import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/u/uia1vt72p.css';
import '../../css/m/mko8dh4hu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 7 7)" class="yph-txb3i"/><path class="uia1vt72p"/><circle class="mko8dh4hu"/></g>`,
		"fallback": "streamline:image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures",
	});
}

export default Component;
