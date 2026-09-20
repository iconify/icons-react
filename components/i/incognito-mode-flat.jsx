import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/royzg162i.css';
import '../../css/i/ildplmb8t.css';
import '../../css/j/jpg5wdkmr.css';
import '../../css/e/e5h1cdn6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="royzg162i"/><path class="ildplmb8t"/><path clip-rule="evenodd" class="jpg5wdkmr"/><path class="e5h1cdn6z"/></g>`,
		"fallback": "streamline-plump-color:incognito-mode-flat",
	});
}

export default Component;
