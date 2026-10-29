import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7p__wdjy.css';
import '../../css/d/df84tibzk.css';
import '../../css/g/gm3lalblg.css';
import '../../css/o/ousiqgb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7p__wdjy"/><path class="df84tibzk"/><path class="gm3lalblg"/><path class="ousiqgb_y"/>`,
		"fallback": "withicons-bauhaus:bed",
	});
}

export default Component;
