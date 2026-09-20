import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnxr3dbjd.css';
import '../../css/n/no6ore_5j.css';
import '../../css/q/qlk7i1b4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnxr3dbjd"/><path class="no6ore_5j"/><path class="qlk7i1b4e"/>`,
		"fallback": "material-icon-theme:folder-ansible-open",
	});
}

export default Component;
