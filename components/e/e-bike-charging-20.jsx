import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6zkfm9wf.css';
import '../../css/r/rzyvrkbci.css';
import '../../css/n/no05bkayi.css';
import '../../css/r/rj8pwo61t.css';
import '../../css/h/hq6hy3pct.css';
import '../../css/j/j3n2_bb5y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6zkfm9wf"/><path class="rzyvrkbci"/><path class="no05bkayi"/><path class="rj8pwo61t"/><path class="hq6hy3pct"/><path class="j3n2_bb5y"/>`,
		"fallback": "energy-icons:e-bike-charging-20",
	});
}

export default Component;
