import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ouoaj-ffm.css';
import '../../css/k/k2yjdebhd.css';
import '../../css/d/dka_nn2km.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ouoaj-ffm"/><rect class="k2yjdebhd"/><path class="dka_nn2km"/></g>`,
		"fallback": "streamline:computer-screen-tv-movies-television-cathode-crt-tv-ray-tube-vintage-video",
	});
}

export default Component;
