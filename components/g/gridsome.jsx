import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t93wronmj.css';
import '../../css/q/qi5qy6i4f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t93wronmj"/><path class="qi5qy6i4f"/>`,
		"fallback": "material-icon-theme:gridsome",
	});
}

export default Component;
