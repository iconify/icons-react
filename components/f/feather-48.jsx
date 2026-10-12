import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zim1xe5fl.css';
import '../../css/i/is-_b_bvj.css';
import '../../css/q/qtbfkyb0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zim1xe5fl"/><path class="is-_b_bvj"/><path class="qtbfkyb0j"/>`,
		"fallback": "energy-icons:feather-48",
	});
}

export default Component;
