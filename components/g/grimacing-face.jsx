import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/j/j-c6jjbfw.css';
import '../../css/s/swfxr2upm.css';
import '../../css/v/v_1cyzbrt.css';
import '../../css/f/fktuxyb2e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="j-c6jjbfw"/><path class="swfxr2upm"/><path class="v_1cyzbrt"/><path class="fktuxyb2e"/></g>`,
		"fallback": "fluent-emoji-flat:grimacing-face",
	});
}

export default Component;
