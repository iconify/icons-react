import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qio0mzbqg.css';
import '../../css/y/yt5yh63nn.css';
import '../../css/e/e_5uv8bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qio0mzbqg"/><path class="yt5yh63nn"/><path class="e_5uv8bbf"/></g>`,
		"fallback": "iconoir:design-nib-solid",
	});
}

export default Component;
