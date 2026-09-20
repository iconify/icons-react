import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd4jcubby.css';
import '../../css/v/v-8at_-qw.css';
import '../../css/g/ga66cwd9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gd4jcubby"/><path class="v-8at_-qw"/><path class="ga66cwd9f"/></g>`,
		"fallback": "streamline-ultimate:app-window-clock",
	});
}

export default Component;
