import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xyx0rojia.css';
import '../../css/v/vwut17bll.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xyx0rojia"/><circle class="vwut17bll"/></g>`,
		"fallback": "streamline:image-camera-setting-pin-photos-camera-map-photography-pictures-maps-settings-pin-photo",
	});
}

export default Component;
