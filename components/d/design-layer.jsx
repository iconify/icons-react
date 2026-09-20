import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv5dr-k_t.css';
import '../../css/a/azsb-3b3g.css';
import '../../css/l/lsqlywp6f.css';
import '../../css/n/ntku73gpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv5dr-k_t"/><path class="azsb-3b3g"/><path class="lsqlywp6f"/><path class="ntku73gpx"/>`,
		"fallback": "streamline-pixel:design-layer",
	});
}

export default Component;
