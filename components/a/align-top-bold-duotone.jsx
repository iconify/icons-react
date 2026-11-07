import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tri1pdban.css';
import '../../css/r/r5hjnw2io.css';
import '../../css/f/f59hu7jtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tri1pdban"/><path class="r5hjnw2io"/><path clip-rule="evenodd" class="f59hu7jtt"/>`,
		"fallback": "solar:align-top-bold-duotone",
	});
}

export default Component;
