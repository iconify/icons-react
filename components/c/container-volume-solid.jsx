import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a72wjfbmf.css';
import '../../css/p/pj99wqb3e.css';
import '../../css/u/uk8ppccwl.css';
import '../../css/p/p4_xyvb1l.css';
import '../../css/l/lhqh-zbkk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a72wjfbmf clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 pj99wqb3e"/><path class="clr-i-solid clr-i-solid-path-3 uk8ppccwl"/><path class="clr-i-solid clr-i-solid-path-4 p4_xyvb1l"/><path class="clr-i-solid clr-i-solid-path-5 lhqh-zbkk"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:container-volume-solid",
	});
}

export default Component;
