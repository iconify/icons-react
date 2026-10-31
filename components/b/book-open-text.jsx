import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/is5xql_vk.css';
import '../../css/l/lijw3yxeo.css';
import '../../css/c/ctjcreb2q.css';
import '../../css/l/levrdiinv.css';
import '../../css/v/v96mv4btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="is5xql_vk"/><path class="lijw3yxeo wm-shine"/><path class="ctjcreb2q wm-k"/><path class="levrdiinv wm-a"/><path class="v96mv4btx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:book-open-text",
	});
}

export default Component;
