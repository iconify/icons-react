import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l54fv-b6j.css';
import '../../css/n/ndyez317g.css';
import '../../css/b/bbx2t-b6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l54fv-b6j"/><path class="ndyez317g"/><path class="bbx2t-b6x"/>`,
		"fallback": "flag:bq-1x1",
	});
}

export default Component;
