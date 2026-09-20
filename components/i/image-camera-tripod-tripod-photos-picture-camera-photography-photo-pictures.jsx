import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g28k-c3rd.css';
import '../../css/y/yocg4b9gh.css';
import '../../css/x/xw3d96bat.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g28k-c3rd"/><rect class="yocg4b9gh"/><circle class="xw3d96bat"/></g>`,
		"fallback": "streamline:image-camera-tripod-tripod-photos-picture-camera-photography-photo-pictures",
	});
}

export default Component;
