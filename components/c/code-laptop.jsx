import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/voy107bcc.css';
import '../../css/u/ue0lmc99t.css';
import '../../css/d/du_k14bgi.css';
import '../../css/j/jo0jbbb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="voy107bcc"/><path class="ue0lmc99t"/><path class="du_k14bgi"/><path class="jo0jbbb-z"/></g>`,
		"fallback": "icon-park:code-laptop",
	});
}

export default Component;
