import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cqnf2cbfm.css';
import '../../css/v/v9pdw6bty.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="cqnf2cbfm"/><path class="v9pdw6bty"/></g>`,
		"fallback": "streamline-plump:feather-pen",
	});
}

export default Component;
