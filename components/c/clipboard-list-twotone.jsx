import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhx2na.css';
import '../../css/e/ei0d1h.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/f/f2o4kw.css';
import '../../css/u/uiakhu.css';
import '../../css/g/g80ckj.css';
import '../../css/s/sx-imf.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhx2na"/><path class="ei0d1h qa-o7h taf2xz"/><path class="f2o4kw qa-o7h"/><path class="qa-o7h taf2xz uiakhu"/><path class="g80ckj qa-o7h taf2xz"/><path class="qa-o7h sx-imf taf2xz"/>`,
		"fallback": "line-md:clipboard-list-twotone",
	});
}

export default Component;
