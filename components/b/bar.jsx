import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9zf29bpy.css';
import '../../css/t/tcyc0_hyz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9zf29bpy"/><path class="tcyc0_hyz"/>`,
		"fallback": "carbon:bar",
	});
}

export default Component;
