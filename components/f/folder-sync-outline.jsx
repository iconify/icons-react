import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdzkhibuc.css';
import '../../css/d/dolqf0b8v.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdzkhibuc"/><path class="dolqf0b8v"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-sync-outline",
	});
}

export default Component;
