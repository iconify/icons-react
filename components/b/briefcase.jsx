import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywxjgug5p.css';
import '../../css/y/yx_uf4b1h.css';
import '../../css/u/uwgelb85v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywxjgug5p"/><path class="yx_uf4b1h"/><path class="uwgelb85v"/></g>`,
		"fallback": "mage:briefcase",
	});
}

export default Component;
