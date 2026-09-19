import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yj73g48oj.css';
import '../../css/u/udaafzcol.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/v/vlfpiv6el.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="yj73g48oj"/><path class="udaafzcol"/><path class="ii0wlebwq"/><path class="vlfpiv6el"/></g>`,
		"fallback": "icon-park-outline:dubai",
	});
}

export default Component;
