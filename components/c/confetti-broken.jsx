import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gkh7_ydkl.css';
import '../../css/i/iz3lcib7g.css';
import '../../css/o/o9qiojmml.css';
import '../../css/z/zfl_jac2j.css';
import '../../css/u/un7ro4b8f.css';
import '../../css/y/ynbr-cmaf.css';
import '../../css/d/dsimmlbll.css';
import '../../css/z/zq-n21o7p.css';
import '../../css/k/kkbn8ggrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="gkh7_ydkl"/><path class="iz3lcib7g"/><path class="o9qiojmml"/><path class="zfl_jac2j"/><path class="un7ro4b8f"/><path class="ynbr-cmaf"/><path class="dsimmlbll"/><path class="zq-n21o7p"/><path class="kkbn8ggrm"/></g>`,
		"fallback": "solar:confetti-broken",
	});
}

export default Component;
