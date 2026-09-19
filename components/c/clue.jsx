import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/h3ohaub8n.css';
import '../../css/z/zzdwj77ik.css';
import '../../css/g/g3e5numxe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="h3ohaub8n"/><path class="zzdwj77ik"/><path class="g3e5numxe"/></g>`,
		"fallback": "icon-park:clue",
	});
}

export default Component;
