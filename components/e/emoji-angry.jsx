import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k__vmq.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/r/rje0ii.css';
import '../../css/p/px0lin.css';
import '../../css/u/ul_dtz.css';
import '../../css/s/sz81oq.css';
import '../../css/l/lx45-m.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k__vmq qa-o7h taf2xz"/><path class="qa-o7h rje0ii taf2xz"/><path class="px0lin qa-o7h"/><path class="qa-o7h taf2xz ul_dtz"/><path class="qa-o7h sz81oq"/><path class="lx45-m qa-o7h taf2xz"/>`,
		"fallback": "line-md:emoji-angry",
	});
}

export default Component;
