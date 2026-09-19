import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwofws6qq.css';
import '../../css/v/vu6dscm0p.css';
import '../../css/a/acyzzjbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwofws6qq"/><path class="vu6dscm0p"/><path class="acyzzjbyb"/>`,
		"fallback": "boxicons:dog",
	});
}

export default Component;
