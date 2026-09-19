import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zo-8uh7ev.css';
import '../../css/j/jllyhjbpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="zo-8uh7ev"/><path class="jllyhjbpq"/></g>`,
		"fallback": "icon-park:align-horizontally",
	});
}

export default Component;
