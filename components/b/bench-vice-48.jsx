import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxn26mb9t.css';
import '../../css/a/aekfktbaf.css';
import '../../css/r/r0qeryp2j.css';
import '../../css/f/fiqncj_tj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxn26mb9t"/><path class="aekfktbaf"/><path class="r0qeryp2j"/><path class="fiqncj_tj"/>`,
		"fallback": "energy-icons:bench-vice-48",
	});
}

export default Component;
