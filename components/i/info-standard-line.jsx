import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srt32fbam.css';
import '../../css/s/s76ldob_q.css';
import '../../css/b/bp242uqss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 srt32fbam"/><path class="clr-i-outline clr-i-outline-path-2 s76ldob_q"/><path class="bp242uqss clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:info-standard-line",
	});
}

export default Component;
