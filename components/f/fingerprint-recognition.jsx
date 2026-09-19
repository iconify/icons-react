import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkzyz0b-d.css';
import '../../css/u/u9h8d2d_j.css';
import '../../css/o/oh7fmbq9r.css';
import '../../css/d/d37t4ibym.css';
import '../../css/w/wcxel2c8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkzyz0b-d"/><path class="u9h8d2d_j"/><path class="oh7fmbq9r"/><path class="d37t4ibym"/><path class="wcxel2c8v"/>`,
		"fallback": "carbon:fingerprint-recognition",
	});
}

export default Component;
