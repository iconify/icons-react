import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/adqp00bqm.css';
import '../../css/e/e2obalblz.css';
import '../../css/j/jyibtv-4l.css';
import '../../css/l/lg6mkzb2d.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="adqp00bqm"/><path class="e2obalblz"/><path class="jyibtv-4l wm-k"/><path class="lg6mkzb2d wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bike",
	});
}

export default Component;
