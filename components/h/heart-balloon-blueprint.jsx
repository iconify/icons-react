import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iu5-nqrjt.css';
import '../../css/q/qfgq5qokv.css';
import '../../css/b/bj2yvbcgu.css';
import '../../css/o/o-_j7kzbc.css';
import '../../css/o/ols_87btu.css';
import '../../css/y/y94_vm6tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="iu5-nqrjt wm-deco"/><path class="qfgq5qokv wm-deco"/><path class="bj2yvbcgu wm-deco"/><path class="o-_j7kzbc wm-k"/><path class="ols_87btu wm-a"/><path class="wm-k y94_vm6tw"/></g>`,
		"fallback": "withicons:heart-balloon-blueprint",
	});
}

export default Component;
