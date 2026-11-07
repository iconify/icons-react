import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7r47tacd.css';
import '../../css/v/vfd6cpb4t.css';
import '../../css/z/zem_esjhx.css';
import '../../css/y/y8f17tims.css';
import '../../css/w/w290wdboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o7r47tacd"/><path class="vfd6cpb4t"/><path class="zem_esjhx"/><path class="y8f17tims"/><path class="w290wdboz"/>`,
		"fallback": "solar:help-bold-duotone",
	});
}

export default Component;
