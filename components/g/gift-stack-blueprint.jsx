import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vhtshccqs.css';
import '../../css/b/b04599g3z.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/ju1mt7bfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vhtshccqs wm-deco"/><path class="b04599g3z wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ju1mt7bfk"/></g>`,
		"fallback": "withicons:gift-stack-blueprint",
	});
}

export default Component;
