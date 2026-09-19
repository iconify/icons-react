import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heyc8pb-z.css';
import '../../css/a/a6xuroieo.css';
import '../../css/d/d98q5ca3x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heyc8pb-z"/><path class="a6xuroieo"/><path class="d98q5ca3x"/>`,
		"fallback": "fxemoji:dromedarycamel",
	});
}

export default Component;
