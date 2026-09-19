import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h9swcnbvp.css';
import '../../css/n/nrodidd9m.css';
import '../../css/o/osaqrz5kl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="h9swcnbvp"/><path class="nrodidd9m"/><path class="osaqrz5kl"/></g>`,
		"fallback": "icon-park:afferent",
	});
}

export default Component;
