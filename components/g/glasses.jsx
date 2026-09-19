import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjaclt60v.css';
import '../../css/m/mdi1hlbik.css';
import '../../css/u/u62zhy_cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="sjaclt60v"/><circle class="mdi1hlbik"/><path class="u62zhy_cd"/></g>`,
		"fallback": "akar-icons:glasses",
	});
}

export default Component;
