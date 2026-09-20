import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcpth-wqs.css';
import '../../css/p/pi7jdd7uf.css';
import '../../css/k/k4zcbrbym.css';
import '../../css/z/zj93wib6z.css';
import '../../css/f/f2eiwubox.css';
import '../../css/f/fywslsbyr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcpth-wqs"/><path class="pi7jdd7uf"/><path class="k4zcbrbym"/><path class="zj93wib6z"/><ellipse class="f2eiwubox"/><path class="fywslsbyr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-andorra",
	});
}

export default Component;
