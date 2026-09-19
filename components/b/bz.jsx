import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g8hrmob6g.css';
import '../../css/a/axbwgjtpa.css';
import '../../css/k/kosew5bhw.css';
import '../../css/l/lakt7bcay.css';
import '../../css/d/do5kqkb-t.css';
import '../../css/h/hfso2z7ml.css';
import '../../css/y/y_1yu2bmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g8hrmob6g"/><circle class="axbwgjtpa"/><circle class="kosew5bhw"/><circle class="lakt7bcay"/><path class="do5kqkb-t"/><path class="hfso2z7ml"/><path class="y_1yu2bmg"/></g>`,
		"fallback": "circle-flags:bz",
	});
}

export default Component;
