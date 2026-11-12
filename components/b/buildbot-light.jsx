import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn3xrcq-r.css';
import '../../css/j/jrgnzrdwe.css';
import '../../css/m/mirl1rbfe.css';
import '../../css/d/dr1ez1b3a.css';
import '../../css/q/qzoqor19g.css';
import '../../css/q/qvr8shuol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn3xrcq-r"/><path class="jrgnzrdwe"/><path class="mirl1rbfe"/><path class="dr1ez1b3a"/><path class="qzoqor19g"/><path class="qvr8shuol"/>`,
		"fallback": "selfhst:buildbot-light",
	});
}

export default Component;
