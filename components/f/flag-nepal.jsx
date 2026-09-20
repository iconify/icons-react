import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btnne-b7c.css';
import '../../css/x/xgp1aszjf.css';
import '../../css/j/jkwtys8nq.css';
import '../../css/j/jun1b0bkg.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/t/t-j2v0bjb.css';
import '../../css/y/yn38kybdb.css';
import '../../css/l/lfg-6uh7u.css';
import '../../css/s/sx-k7gsgp.css';
import '../../css/s/s8k3clbzp.css';
import '../../css/g/gjk4eeb3r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btnne-b7c"><path class="xgp1aszjf"/><circle class="jkwtys8nq"/><path class="jun1b0bkg"/></g><g class="c-zrgpb5l"><path class="t-j2v0bjb"/><path class="yn38kybdb"/><circle class="lfg-6uh7u"/><path class="sx-k7gsgp"/></g><path class="s8k3clbzp"/><path class="gjk4eeb3r"/>`,
		"fallback": "openmoji:flag-nepal",
	});
}

export default Component;
