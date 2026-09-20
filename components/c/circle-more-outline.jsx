import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iio97lbyc.css';
import '../../css/k/k8hdm7bgr.css';
import '../../css/i/i_drgjvgz.css';
import '../../css/s/ss_z8ac7s.css';
import '../../css/a/ad45zbzbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iio97lbyc"/><path class="k8hdm7bgr"/><path class="i_drgjvgz"/><path class="ss_z8ac7s"/><path class="ad45zbzbj"/></g>`,
		"fallback": "lsicon:circle-more-outline",
	});
}

export default Component;
