import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vdkj3yk3r.css';
import '../../css/b/bq9iuqbqy.css';
import '../../css/o/oh8-yacve.css';
import '../../css/n/n8o_jib3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="vdkj3yk3r"/><circle class="bq9iuqbqy"/><path class="oh8-yacve"/><path class="n8o_jib3f"/></g>`,
		"fallback": "icon-park:flip-camera",
	});
}

export default Component;
