import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl2frcbpe.css';
import '../../css/d/dg1--abbd.css';
import '../../css/v/v4kg3db6t.css';
import '../../css/k/kwh1q5bxs.css';
import '../../css/p/pef-x4byw.css';
import '../../css/j/j0b3mndhh.css';
import '../../css/c/ca5ecz53l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl2frcbpe"/><circle class="dg1--abbd"/><circle class="v4kg3db6t"/><circle class="kwh1q5bxs"/><circle class="pef-x4byw"/><path class="j0b3mndhh"/><path class="ca5ecz53l"/>`,
		"fallback": "carbon:edge-node",
	});
}

export default Component;
