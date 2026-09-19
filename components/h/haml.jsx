import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/da3r7lk0q.css';
import '../../css/c/cq9m21bdq.css';
import '../../css/o/omcq2obdb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="da3r7lk0q"/><path class="cq9m21bdq"/><path class="omcq2obdb"/></g>`,
		"fallback": "catppuccin:haml",
	});
}

export default Component;
