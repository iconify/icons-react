import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s64_qjh3v.css';
import '../../css/a/a_frtcbae.css';
import '../../css/y/yuetoib9q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="s64_qjh3v"/><circle class="a_frtcbae"/><path class="yuetoib9q"/></g>`,
		"fallback": "streamline:image-camera-2-photos-picture-camera-photography-photo-pictures",
	});
}

export default Component;
