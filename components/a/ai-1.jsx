import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/x/xkks1nbpj.css';
import '../../css/r/rmzj6nbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="xkks1nbpj"/><path class="rmzj6nbtv"/></g>`,
		"fallback": "tdesign:ai-1",
	});
}

export default Component;
