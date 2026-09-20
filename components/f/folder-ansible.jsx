import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiap8ebun.css';
import '../../css/k/ka5hixi2k.css';
import '../../css/k/kaxf2trrq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiap8ebun"/><path class="ka5hixi2k"/><path class="kaxf2trrq"/>`,
		"fallback": "material-icon-theme:folder-ansible",
	});
}

export default Component;
