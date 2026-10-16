import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxq650zlt.css';
import '../../css/b/b_ayuzlry.css';
import '../../css/q/q3czggb2v.css';
import '../../css/s/sxcnixb6f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxq650zlt"/><path class="b_ayuzlry"/><path class="q3czggb2v"/><path class="sxcnixb6f"/>`,
		"fallback": "energy-icons:cargo-drone-20-bold",
	});
}

export default Component;
