import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybes7k--d.css';
import '../../css/c/c4946-17v.css';
import '../../css/m/mo43we00a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybes7k--d"/><path class="c4946-17v"/><path class="mo43we00a"/>`,
		"fallback": "solar:clipboard-copy-bold-duotone",
	});
}

export default Component;
