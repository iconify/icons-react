import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzw294bui.css';
import '../../css/a/ampzm9j-w.css';
import '../../css/e/e28d0kbjo.css';
import '../../css/j/jjh__43kw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzw294bui"/><path class="ampzm9j-w"/><path class="e28d0kbjo"/><path class="jjh__43kw"/></g>`,
		"fallback": "fluent-emoji-flat:baseball",
	});
}

export default Component;
