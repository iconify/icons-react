import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/p/p51w8qvts.css';
import '../../css/c/cahla8b5c.css';
import '../../css/s/smj0d4bpt.css';
import '../../css/c/cg07vff7x.css';
import '../../css/a/adat9lbta.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="p51w8qvts"/><path class="cahla8b5c"/><path class="smj0d4bpt"/><path class="cg07vff7x"/><path class="adat9lbta"/>`,
		"fallback": "k8s:daemonset",
	});
}

export default Component;
