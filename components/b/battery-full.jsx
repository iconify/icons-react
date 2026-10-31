import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a7tel1o4l.css';
import '../../css/f/fliixcbxf.css';
import '../../css/f/f45tkrvct.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/d/dzkw8mugw.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a7tel1o4l"/><path class="fliixcbxf"/><path class="f45tkrvct wm-shine"/><path class="nn2sdrbun wm-k"/><path class="dzkw8mugw wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:battery-full",
	});
}

export default Component;
