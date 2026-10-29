import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nosy6rbhy.css';
import '../../css/b/b-fk4npsi.css';
import '../../css/v/vii1f-blo.css';
import '../../css/x/x8f535bkn.css';
import '../../css/a/aa408e1ae.css';
import '../../css/a/apaktvb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nosy6rbhy wm-k"/><path class="b-fk4npsi wm-k"/><path class="vii1f-blo wm-k"/><path class="wm-k x8f535bkn"/><path class="aa408e1ae wm-shine"/><path class="apaktvb2o wm-a"/></g>`,
		"fallback": "withicons-anime:cube",
	});
}

export default Component;
