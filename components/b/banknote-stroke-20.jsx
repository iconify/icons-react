import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l77ykybti.css';
import '../../css/b/boq7xrcxu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l77ykybti"/><path class="boq7xrcxu"/>`,
		"fallback": "garden:banknote-stroke-20",
	});
}

export default Component;
