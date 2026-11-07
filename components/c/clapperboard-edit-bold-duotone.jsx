import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udhl7bbum.css';
import '../../css/c/ch0lkibmx.css';
import '../../css/k/k5s_6-4ei.css';
import '../../css/d/dw6-rudva.css';
import '../../css/x/xowa9vplg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udhl7bbum"/><path class="ch0lkibmx"/><path class="k5s_6-4ei"/><path class="dw6-rudva"/><path class="xowa9vplg"/>`,
		"fallback": "solar:clapperboard-edit-bold-duotone",
	});
}

export default Component;
