import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0sqvp_wh.css';
import '../../css/e/eny6z_bgj.css';
import '../../css/g/gzwu-mp2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0sqvp_wh"/><path class="eny6z_bgj"/><path class="gzwu-mp2o"/>`,
		"fallback": "streamline-ultimate:envelope-sealed-bold",
	});
}

export default Component;
