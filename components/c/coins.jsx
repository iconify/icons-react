import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhoobpq9t.css';
import '../../css/f/ft2zb-bqy.css';
import '../../css/d/dj6rm_b0m.css';
import '../../css/x/x92iww81k.css';
import '../../css/o/owde3tbbg.css';
import '../../css/i/i19m3yb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhoobpq9t wm-a"/><path class="ft2zb-bqy wm-a"/><path class="dj6rm_b0m wm-a"/><path class="wm-k x92iww81k"/><path class="owde3tbbg wm-k"/><path class="i19m3yb6m wm-k"/>`,
		"fallback": "withicons-bauhaus:coins",
	});
}

export default Component;
