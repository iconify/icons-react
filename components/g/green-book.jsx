import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iefgv8blp.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/l/lt77i4t0q.css';
import '../../css/s/spv51-71t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iefgv8blp"/><path class="e3idh-b6l"/><path class="lt77i4t0q"/><path class="spv51-71t"/></g>`,
		"fallback": "fluent-emoji-flat:green-book",
	});
}

export default Component;
