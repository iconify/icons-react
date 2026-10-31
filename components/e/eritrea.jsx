import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ignec6b8h.css';
import '../../css/e/edgg_m-zr.css';
import '../../css/e/eyrktq3-q.css';
import '../../css/l/lo6d6knyb.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ignec6b8h"/><path class="edgg_m-zr"/><path class="eyrktq3-q"/><path class="lo6d6knyb"/>`,
		"fallback": "tabler-flags:eritrea",
	});
}

export default Component;
