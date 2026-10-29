import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_ejw266b.css';
import '../../css/a/aaqvjnbzo.css';
import '../../css/g/gnyy8hb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_ejw266b"/><path class="aaqvjnbzo"/><path class="gnyy8hb9w"/>`,
		"fallback": "withicons-bauhaus:git-commit",
	});
}

export default Component;
