import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/b/b-_1sqbam.css';
import '../../css/v/vt7pyjbqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="utf5_xbzs"/><path class="b-_1sqbam"/><path class="vt7pyjbqq"/></g>`,
		"fallback": "icon-park:facetime",
	});
}

export default Component;
