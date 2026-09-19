import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfrjrd8qn.css';
import '../../css/j/jxfl46bls.css';
import '../../css/h/hfxcmzb3d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfrjrd8qn"/><path class="jxfl46bls"/><path class="hfxcmzb3d"/>`,
		"fallback": "devicon:backbonejs-wordmark",
	});
}

export default Component;
