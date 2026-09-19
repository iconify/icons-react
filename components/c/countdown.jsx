import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcw4ccctf.css';
import '../../css/c/c7zsidbio.css';
import '../../css/a/aga97actr.css';
import '../../css/l/luym5ou8t.css';
import '../../css/r/retdkbgbu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dcw4ccctf"/><path clip-rule="evenodd" class="c7zsidbio"/><path class="aga97actr"/><path clip-rule="evenodd" class="luym5ou8t"/><path clip-rule="evenodd" class="retdkbgbu"/></g>`,
		"fallback": "pepicons:countdown",
	});
}

export default Component;
