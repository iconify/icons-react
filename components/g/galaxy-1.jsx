import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u88n9vd2w.css';
import '../../css/r/rg2c_ob_l.css';
import '../../css/a/a3mu-p47d.css';
import '../../css/y/yhcxlqcnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u88n9vd2w"/><path class="rg2c_ob_l"/><path class="a3mu-p47d"/><path class="yhcxlqcnk"/></g>`,
		"fallback": "streamline:galaxy-1",
	});
}

export default Component;
