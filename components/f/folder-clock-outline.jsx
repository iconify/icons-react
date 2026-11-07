import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7p-8cptj.css';
import '../../css/u/uu8xqrboc.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7p-8cptj"/><path clip-rule="evenodd" class="uu8xqrboc"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-clock-outline",
	});
}

export default Component;
