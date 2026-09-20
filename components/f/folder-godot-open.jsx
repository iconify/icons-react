import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa0d9wb7d.css';
import '../../css/r/rz1q6nuvq.css';
import '../../css/x/xrnpo0biw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa0d9wb7d"/><path class="rz1q6nuvq"/><path class="xrnpo0biw"/>`,
		"fallback": "material-icon-theme:folder-godot-open",
	});
}

export default Component;
