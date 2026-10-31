import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xm_owrb5y.css';
import '../../css/y/yaqbqvbhu.css';
import '../../css/u/u-julac8y.css';
import '../../css/h/hf0bzw-qm.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xm_owrb5y"/><path class="wm-shine yaqbqvbhu"/><path class="u-julac8y wm-k"/><path class="hf0bzw-qm wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:baby-bottle",
	});
}

export default Component;
