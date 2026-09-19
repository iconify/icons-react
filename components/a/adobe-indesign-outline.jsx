import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gux5og_2t.css';
import '../../css/m/mjz1r4_dm.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gux5og_2t"/><path class="mjz1r4_dm"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:adobe-indesign-outline",
	});
}

export default Component;
