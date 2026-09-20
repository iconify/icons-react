import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_tntx51i.css';
import '../../css/m/mb80vk5am.css';
import '../../css/d/dblqytbxw.css';
import '../../css/r/rnyy7it-f.css';
import '../../css/e/ezy9w0bwj.css';
import '../../css/s/s329o7boy.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_tntx51i"/><path class="mb80vk5am"/><path class="dblqytbxw"/><path class="rnyy7it-f"/><path class="ezy9w0bwj"/><path class="s329o7boy"/></g>`,
		"fallback": "streamline-stickies-color:baby",
	});
}

export default Component;
