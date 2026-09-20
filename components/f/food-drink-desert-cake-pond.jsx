import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeftfubxz.css';
import '../../css/r/rlfkotbsg.css';
import '../../css/t/traeju0bc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeftfubxz"/><path class="rlfkotbsg"/><path class="traeju0bc"/>`,
		"fallback": "streamline-pixel:food-drink-desert-cake-pond",
	});
}

export default Component;
