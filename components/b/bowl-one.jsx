import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/w/wi1u51b6i.css';
import '../../css/i/i4nouhexe.css';
import '../../css/q/qf7tbcbyb.css';
import '../../css/s/s4aesvbut.css';
import '../../css/o/ojmn89b2j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="wi1u51b6i"/><path class="i4nouhexe"/><path class="qf7tbcbyb"/><path class="s4aesvbut"/><path class="ojmn89b2j"/></g>`,
		"fallback": "icon-park:bowl-one",
	});
}

export default Component;
