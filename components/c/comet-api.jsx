import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff1i7tbml.css';
import '../../css/k/kcxyz-btg.css';
import '../../css/t/to-4dx7tn.css';
import '../../css/x/xi3p24bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff1i7tbml"/><path class="kcxyz-btg"/><path class="to-4dx7tn"/><path class="xi3p24bun"/>`,
		"fallback": "thesvg-color:comet-api",
	});
}

export default Component;
