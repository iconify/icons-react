import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v777khbiw.css';
import '../../css/a/a2-ttn8jg.css';
import '../../css/i/i5wi-07eg.css';
import '../../css/e/eltux0bcv.css';
import '../../css/y/yx0o06bht.css';
import '../../css/i/i5ctbtbxz.css';
import '../../css/a/a-8tieo0e.css';
import '../../css/d/dz73m5jbx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v777khbiw"/><path class="a2-ttn8jg"/><path class="i5wi-07eg"/><path class="eltux0bcv"/><path class="yx0o06bht"/><path class="i5ctbtbxz"/><path class="a-8tieo0e"/><path class="dz73m5jbx"/>`,
		"fallback": "devicon:drupal-wordmark",
	});
}

export default Component;
