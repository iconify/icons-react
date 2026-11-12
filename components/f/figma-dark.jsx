import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrrmhudgn.css';
import '../../css/s/s1fe8-ujg.css';
import '../../css/z/zzrabizfh.css';
import '../../css/v/v2d1uib7g.css';
import '../../css/k/kia9sac_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrrmhudgn"/><path class="s1fe8-ujg"/><circle class="zzrabizfh"/><path class="v2d1uib7g"/><path class="kia9sac_t"/>`,
		"fallback": "selfhst:figma-dark",
	});
}

export default Component;
