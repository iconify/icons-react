import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-_te6bcd.css';
import '../../css/j/jgcqempew.css';
import '../../css/c/cfwhifxgg.css';
import '../../css/o/oc7o-9boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a-_te6bcd"/><circle class="jgcqempew"/><circle class="cfwhifxgg"/><path class="oc7o-9boq"/></g>`,
		"fallback": "hugeicons:folder-git-2",
	});
}

export default Component;
